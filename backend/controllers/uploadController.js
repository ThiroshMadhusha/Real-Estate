// multer install for upload images
// 1.03h

const multer = require('multer');

const uploadController = require('express').Router();

// upload image destination and filename 
//destination: where to store the image
//filename: name of the image
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'public/images')
    },
    filename:(req,file, cb)=>{
        cb(null, req.body.filename)
    }
})

const upload = multer({storage:storage});

// upload single image
uploadController.post("/image", upload.single('image'), async (req,res)=>{

    try {
        
        return res.status(200).json("Image uploaded successfully")
    } catch (error) {
        console.error(error)
    }
})

module.exports = uploadController;