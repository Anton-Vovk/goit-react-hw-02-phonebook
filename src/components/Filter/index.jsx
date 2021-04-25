  
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
};

export default Filter;