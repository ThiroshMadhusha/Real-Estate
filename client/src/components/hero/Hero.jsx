import React,{useState} from 'react'
import classes from "./hero.module.css"

import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {

  const [type, setType] = useState("beach")
  const [Continent , setContinent] = useState("0")
  const [priceRange, setPriceRange] = useState("0")

  const handleSearch = ()=>{

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me Find Your Dream Place Right Now...!</h2>
        <h5>Search The Best Selection of Luxury Real Estate</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select Type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">250$ - 300$</option>
            <option value="1">300$ - 400$</option>
            <option value="2">400$ - 500$</option>
            <option value="3">500$ - 600$</option>
            <option value="4">600$ - 1000$</option>
            <option value="4">1000$ +</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Tangalle</option>
            <option value="1">Dikwella</option>
            <option value="2">Matara</option>
            <option value="3">Mirissa</option>
            <option value="4">Habmantota</option>
            <option value="5">Beliatta</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} />
        </div>
      </div>
    </div>
  )



}

export default Hero