import React from 'react'
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About The App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore assumenda nemo, cumque odio dolorem fugiat commodi! Accusantium corporis illo maxime, maiores dolor tenetur eum quis nisi? Reprehenderit, magni quaerat.</p>

        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone : 0773467723</span>
          <span>Email : cutravel@gmail.com</span>
          <span>Location : Tangalle, Sri Lanka</span>
        </div>

        <div className={classes.col}>
          <h2>Details</h2>
          <span>Phone : 0773467723</span>
          <span>Email : cutravel@gmail.com</span>
          <span>Location : Tangalle, Sri Lanka</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer