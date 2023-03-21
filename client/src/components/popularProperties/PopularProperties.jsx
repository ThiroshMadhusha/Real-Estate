import React,{useState} from 'react'
import {useEffect} from 'react'
import classes from './popularProperties.module.css'
import { Link } from 'react-router-dom'
import {request} from "../../util/fetchAPI"
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img3.jpg'
import img3 from '../../assets/img4.jpg'


const PopularProperties = () => {

  const [numProperties, setNumProperties] = useState({});

  useEffect(() => {
    
    const fetchNumberProperties = async () => {
      try{

        // backend -->> property controller -->> find/types
        const data = await request('/property/find/types', 'GET')
        // console.log(data)
        setNumProperties(data);
      }catch(error){
        console.error(error.message)
      }
    }
    fetchNumberProperties()
  }, [])
  
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different Types of Properties</h5>
          <h2>Best Type of Property For You..!</h2>
        </div>

{/* type= ??? change wenna one picture ekata hariyanna */}
        <div className={classes.properties}>
          <Link className={classes.property} to={`/properties?type=beach&cotinental=1&priceRange=2`}>
            <img src={img1} alt="" />
            <div className={classes.quantity}>{numProperties?.beach} Properties</div>
            <h5>Beach Properties</h5>
          </Link >
          <Link className={classes.property} to={`/properties?type=mountain&cotinental=1&priceRange=2`}>
            <img src={img2} alt="" />
            <div className={classes.quantity}>{numProperties?.mountain} Properties</div>
            <h5>Mountain Properties</h5>
          </Link >
          <Link className={classes.property} to={`/properties?type=village&cotinental=1&priceRange=2`}>
            <img src={img3} alt="" />
            <div className={classes.quantity}>{numProperties?.village} Properties</div>
            <h5>Village Properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties