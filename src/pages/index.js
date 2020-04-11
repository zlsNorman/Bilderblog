import React, { useState } from "react"
import { Link } from "gatsby"
import Button from "../components/button/button";
import styles from '../styles/index.module.scss';
import art from "../img/art.jpeg"
import references from "../img/references.jpg"
export default () => {

 return (
  <div>
    <div className={styles.imageGallery}> 
      <Link to="/test">
        <img src={art} alt="art"/>
        <h1>Art</h1>
      </Link>
      <Link to="/test">
        <img src={references} alt="references"/>
        <h1>References</h1>
      </Link>
    </div>
  </div>
 )}
