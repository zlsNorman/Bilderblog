import React from "react";
import styles from '../../styles/index.module.scss';

const Header = ({ name, anzahl, jahr }) => {
  return(
  <>
    <div className={styles.headerStyle}> <h1>Jannis Art Gallery</h1></div>
    <div className={styles.headerStyle}> <p>Startseite</p></div>
  </>
)}
export default Header;