import React, { Fragment } from "react";
import styles from "./home-item.module.css";


const HomeItem = (props) => {
  return (
    <Fragment>            
      <div className={styles.container}>
        <div className={styles.box}>         
         <h3 className={styles.itemType}>{props.title}</h3>
        </div>
        <label className={styles.title}>Popular {props.title}</label>
      </div>
    </Fragment>    
  );
};

export default HomeItem;
