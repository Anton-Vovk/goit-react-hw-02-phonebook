import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };
  state = {
    name: '',
    number: '',
  };
  submitHandler = e => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.addPhonebook(singleContact);
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
        <form onSubmit={this.submitHandler}>
          <label className={styles.contactFormLable}> Name
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
            ></input>
          </label>
          <label className={styles.contactFormLable}> Number
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="Add number"
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
  addPhonebook: PropTypes.func.isRequired,
};

export default ContactForm;
