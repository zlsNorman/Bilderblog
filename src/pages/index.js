import React, { useState } from "react"
import { Link } from "gatsby"
import Button from "../components/button/button";
import styles from '../styles/index.module.scss';
import art from "../img/art.jpeg"
import references from "../img/references.jpg"
export default () => {
  const [counter, setCounter] = useState(12);
  const [name, setName] = useState('Ronny');
 // javascript functkionen
  const  increaceCounter = () => {
    setCounter(counter + 1);
  }
  const  decreaseCounter = () => {
    setCounter(counter - 1);
  }

 return (
  <div>
      {/*<h1>startseite</h1>
      <h2>Counter: {counter}</h2>
      <h1>{name}</h1>
      <Button handleClick={increaceCounter} name="+"/>
      <Button handleClick={decreaseCounter} name="-"/>
      <input onBlur={(e) => setName(e.target.value)} type="text"/>
      <Link to="/test" name={name}>Testseite</Link>
      */}

    <div className={styles.imageGallery}>
      <div className={styles.GalleryImage}>
        <img src={art} alt="art"/>
        <div className={styles.GalleryImageText}>
          <h1>Art</h1>
        </div>
      </div>
      <div>
        <h1>References</h1>
        <img src={references} alt="references"/>
      </div>
    </div>
  </div>
 )}
