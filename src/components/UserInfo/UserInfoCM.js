import React from 'react';
import styles from "./UserInfoBEM.css";

export const UserInfoCM = () => (
  <div className={styles.userInfo}>
    <img
      src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
      alt="Hello World"
      className={styles.img}
    />
    <div className={styles.content}>
      <div>Kamal Bennani</div>
      <div>JS Developer</div>
    </div>
  </div>
);
