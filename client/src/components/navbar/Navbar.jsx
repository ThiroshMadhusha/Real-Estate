import React from 'react'
import classes from "./navbar.module.css"
import { Link } from "react-router-dom"
import { BsHouseDoor } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <Link to='/' className={classes.left}>
        Real Estate <BsHouseDoor />
      </Link>
      <ui className={classes.center}>
        <li className={classes.listItem}>Home</li>
        <li className={classes.listItem}>About</li>
        <li className={classes.listItem}>Featured</li>
        <li className={classes.listItem}>Contacts</li>
      </ui>
      <div className={classes.right}>
        <Link to="/signup">Sign UP</Link>
        <Link to="/signin">Sign In</Link>
      </div>
      </div>
    </div>
  )
}
export default Navbar;