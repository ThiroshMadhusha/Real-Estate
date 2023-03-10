
const Property = require('../models/Property');

const propertyController = require('express').Router();

const verifyToken = require('../middlewares/verifyToken');

// get all
propertyController.get('/getAll', async(req,res)=>{
    try {
        const properties = await Property.find({})

        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error.message)
        
    }
})

// get featured
propertyController.get('/find/featured',async(req,res)=>{

    try {
        const featuredProperties = await Property.find({featured:true}).populate("currentOwner", "-password")
        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error.message)
        
    }
})
//get all from a specific type
propertyController.get('/find', async (req, res) => {
    const type = req.query
    // let properties = []
    try {
        if (type) {
            const properties = await Property.find(type).populate("currentOwner", '-password')
            return res.status(200).json(properties)
        } else {
            return res.status(500).json({ msg: "No Such Type" })
        }

    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// get all types and count
propertyController.get('/find/types',async(req,res)=>{
    try {

        const beachType = await Property.countDocuments({type:"beach"})
        const mountainType = await Property.countDocuments({type:"mountain"})
        const villageType = await Property.countDocuments({type:"village"})

        return res.status(200).json({
            beach:beachType,
            mountain:mountainType,
            village:villageType
        })

        
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// get individual property
propertyController.get('/find/:id',async(req,res)=>{
    
    try {
        const property = await Property.findById(req.params.id).populate("currentOwner", "-password")

        if(!property){
            throw new Error("No such property found with this id")
        }else{
            return res.status(200).json(property)
        } 
        
    } catch (error) {
        return res.status(500).json(error.message)
        
    }
})

// create an property
propertyController.post('/', verifyToken,  async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)

    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// *****************   .toString() --> update and delete eke yedeema aniwaarya wee. *************
// without .toString() , it show an error like "You are not authorized to update this property"
// update property
propertyController.put('/:id',verifyToken,async(req,res)=>{

    try {
        const property = await Property.findById(req.params.id)

        // console.log(property.currentOwner.toString(), req.user.id)

        if(property.currentOwner.toString() !== req.user.id.toString()){
            throw new Error("You are not authorized to update this property")

        }else{
            const updatedProperty = await Property.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true}
    
            )
            return res.status(200).json(updatedProperty)
        }
    } catch (error) {

        return res.status(500).json(error.message)
    }
})

// delete property
propertyController.delete('/:id',verifyToken,async(req,res)=>{
    try {
        const property = await Property.findById(req.params.id)

        if(property.currentOwner.toString() !== req.user.id.toString()){
            throw new Error("You are not authorized to delete this property")
        }else{
            await property.delete()
            return res.status(200).json({msg:"Property deleted successfully"})
        }
    } catch (error) {
        return res.status(500).json(error.message)
        
    }
})

module.exports = propertyController;