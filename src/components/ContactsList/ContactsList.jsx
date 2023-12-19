import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const listOfContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {listOfContacts.length > 0 ? (
        <ul>
          {listOfContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p>No contact exists</p>
      )}
    </>
  );
};
