import { useDispatch, useSelector } from 'react-redux';
import Section from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import styles from './Section/Section.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : (
        <>
          {contacts && contacts.length > 0 ? (
            <Section title="Contacts">
              <Filter />
              <ContactsList />
            </Section>
          ) : (
            <p className={styles.sectionWrapper}>You don't have contacts</p>
          )}
        </>
      )}
    </div>
  );
};
