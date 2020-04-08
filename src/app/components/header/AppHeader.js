import React, { Fragment } from "react";
import styles from "./header.module.css";

const AppHeader = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.container}>            
          <div className={styles.demoStreaming}>            
              <a href="/home">
                <span>DEMO Streaming</span>            
              </a>
          </div>        
          <nav className={styles.navOptions}>
            <ul className={styles.navs}>                
              <li className={styles.navOption}>
                <a className={styles.login} href="/home">
                  Log in
                </a>
              </li>
              <li className={styles.navOption}>
                <button className={styles.freeTrial}>               
                  <span className={styles.freeTrialText}>Start your free trial</span>
                </button>
              </li>
            </ul>              
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default AppHeader;
