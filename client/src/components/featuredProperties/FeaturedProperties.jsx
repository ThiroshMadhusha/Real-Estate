import React,{useState, useEffect} from 'react'
import classes from "./featureProperties.module.css"
import {request} from "../../util/fetchAPI"
import {Link} from "react-router-dom"
import img1 from "../../assets/img1.jpg"
import person1 from "../../assets/user1.jpg"
import {FaBed, FaSquareFull} from "react-icons/fa"

const FeaturedProperties = () => {

  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
    try {
      const data = await request('/property/find/featured',"GET")
      setFeaturedProperties(data) 
      
    } catch (error) {
      console.log(error.message)
      
    }
  }
  fetchFeatured()
  }, [])
  console.log(featuredProperties)
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Property You May Like...</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
          {featuredProperties?.map((property) => (
            <div key={property._id} className={classes.featuredProperty}>
              <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}> 
              <img src={img1} alt="" />
              </Link>
              <div className={classes.details}>
                <div className={classes.priceAndOwner}>
                  <span className={classes.price}>${property?.price}</span>
                  <img src={person1} className={classes.owner} alt="" />
                </div>
                <div className={classes.moreDetails}>
                  <span>{property?.beds}Beds<FaBed className={classes.icon} /></span>
                  <span>{property?.sqmeters}Square Meters<FaSquareFull className={classes.icon} /></span>
                </div>
                <div className={classes.desc}>
                  {property?.desc}dddddddddddddddd
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties