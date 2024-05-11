import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from '../../redux/selectors';

const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <List>
      {filterContacts?.map(({ id, name, phone }) => {
        return <ContactItem key={id} name={name} phone={phone} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
