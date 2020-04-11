import React, { useState } from "react"
import { Link } from "gatsby"
import Button from "../components/button/button";
import styles from '../styles/index.module.scss';
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
    <h1>startseite</h1>
    <h2>Counter: {counter}</h2>
    <h1>{name}</h1>
    <Button handleClick={increaceCounter} name="+"/>
    <Button handleClick={decreaseCounter} name="-"/>
    <input onBlur={(e) => setName(e.target.value)} type="text"/>
    <Link to="/test" name={name}>Testseite</Link>
    <div className={styles.imageGallery}>
      <div>
        <h1>Bild 1</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
      <div>
        <h1>Bild 2</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
      <div>
        <h1>Bild 3</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
      <div>
        <h1>Bild 4</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
      <div>
        <h1>Bild 5</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
      <div>
        <h1>Bild 6</h1>
        <img src="https://i.picsum.photos/id/48/200/300.jpg"/>
        <p>lorem ipsduzfshdfhnsdfhshdf hsdhfhsdhfhsdfh.</p>
      </div>
    </div>
  </div>
 )}
