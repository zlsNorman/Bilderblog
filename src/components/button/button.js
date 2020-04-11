import React from "react"
import btnStyles from "./button.module.scss"
const Button = ({ handleClick, name }) => {
  
  return(
    <>
      <button type="text" className={btnStyles.btn} onClick={handleClick}>{name}</button>
    </>
)}
export default Button;