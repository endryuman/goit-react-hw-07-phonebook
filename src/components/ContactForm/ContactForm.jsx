import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;

    const isContactExist =
      contacts &&
      contacts.some(
        contact => contact.name.toLowerCase() === newContactName.toLowerCase()
      );

    if (isContactExist) {
      alert('Contact with this name already exist!');
      e.target.reset();
      return;
    }
    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" required />
      <label htmlFor="number">Number</label>
      <input id="number" type="tel" name="number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};
