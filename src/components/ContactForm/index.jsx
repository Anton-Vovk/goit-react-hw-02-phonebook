import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.addToPhonebook(singleContact);
    this.setState({ ...this.initialState });
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label name="name" className={styles.contactFormLable}>
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="add name"
              value={name}
            ></input>
          </label>
          <label name="number" className={styles.contactFormLable}>
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="add number"
              value={number}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addToPhonebook: PropTypes.func.isRequired,
};

export default ContactForm;
