import React, { Fragment } from "react";
import styles from "./items-list-header.module.css";

const ItemsListHeader = (props) => {
  return (
    <Fragment>
      <section className={styles.pageTitle}>
        <div className={styles.pageTitleText}>
            <span >{props.headerTitle}</span>
        </div>
      </section>      
    </Fragment>
    
  );
};

export default ItemsListHeader;
