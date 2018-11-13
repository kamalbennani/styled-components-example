import React from 'react';
import styles from './ButtonCM.module.css';
console.log('styles', styles);

export const ButtonCM = ({ type, children }) => {
  return (
    <button className={`${styles.Button} ${styles[`Button-${type}`]}`}>
      {children}
    </button>
  );
};

ButtonCM.defaultProps = {
  type: 'default',
};
