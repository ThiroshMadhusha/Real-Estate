import React from 'react'
import classes from "./newsLetter.module.css"
import { FiSend } from "react-icons/fi"

const NewsLetter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Send us Your Email and We Will Do The Rest...!</h2>
        </div>

        <div className={classes.inputContainer}>
          <input type="email" placeholder='Enter The Your Email...' />
          <FiSend className={classes.sendIcon} />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter