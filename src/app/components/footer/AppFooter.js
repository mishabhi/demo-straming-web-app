import React, { Fragment } from "react";
import styles from "./footer.module.css";

const AppFooter = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.socialMediaContainer}>
            <a href="https://facebook.com/demo_streaming" target="_blank">
                <img className={styles.socialMedia} src="assets/facebook.svg"></img>
            </a>
            <a href="https://instagram.com/demo_streaming">
                <img className={styles.socialMedia} src="assets/instagram.svg" target="_blank"></img>
            </a>
            <a href="https://twitter.com/demo_streaming">
                <img className={styles.socialMedia} src="assets/twitter.svg" target="_blank"></img>
            </a>        
        </div>
        <div className={styles.footerList}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Collection Statement</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
            </nav>
        </div>
        <div className={styles.storeContainer}>
            <a href="https://facebook.com/demo_streaming" target="_blank">
                <img className={styles.store} src="assets/ios.svg"></img>
            </a>
            <a href="https://instagram.com/demo_streaming">
                <img className={styles.store} src="assets/android.svg" target="_blank"></img>
            </a>
            <a href="https://twitter.com/demo_streaming">
                <img className={styles.store} src="assets/windows.svg" target="_blank"></img>
            </a>        
        </div>
      </footer>      
    </Fragment>
    
  );
};

export default AppFooter;
