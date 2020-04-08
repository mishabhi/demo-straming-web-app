import React, { Fragment } from "react";
import styles from "./loader.module.css";


const Loader = (props) => {
  return (
    <Fragment>      
      <div className={styles.loader}>         
        <h4 >{props.type === "loader" ? "Loading..." : "Oops something went wrong..."}</h4>          
      </div>       
    </Fragment>    
  );
};

export default Loader;
