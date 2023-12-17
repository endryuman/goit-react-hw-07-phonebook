import { useSelector } from 'react-redux';
import Section from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { getContacts } from '../redux/selectors';
import styles from './Section/Section.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts && contacts.length > 0 ? (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      ) : (
        <p className={styles.sectionWrapper}>You don't have contacts</p>
      )}
    </div>
  );
};
