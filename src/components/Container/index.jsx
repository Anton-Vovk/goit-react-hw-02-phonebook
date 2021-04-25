import React from 'react';
import PropTypes from 'prop-types';
import styles from "./index.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
 
Container.propTypes = {
    title: PropTypes.string
}
export default Container;