import React, { Fragment } from "react";
import styles from "./item.module.css";


const Item = (props) => {
  const {url, title} = props;
  return (
    <Fragment>      
      <div className={styles.container}>
        <div className={styles.box} style={{backgroundImage: `url(${url})`}} />
        <label className={styles.title}>{title}</label>
      </div>     
    </Fragment>    
  );
};

export default Item;
