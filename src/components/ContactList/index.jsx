import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ filterContact, deleteContact }) => {
  return (
    <ul>
      {filterContact.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
