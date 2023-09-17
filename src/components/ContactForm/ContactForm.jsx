import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Form, Input, Text, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const existingContact = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Report.warning(`Contact with name ${name} already exists!`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' .\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ \-.\s]?\(?\d{1,3}?\)?[ \-.\s]?\d{1,4}[ \-.\s]?\d{1,4}[ \-.\s]?\d{1,9}"
        title="Phone number"
        required
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter your phone number in the format ХХХ-ХХ-ХХ"
       
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
