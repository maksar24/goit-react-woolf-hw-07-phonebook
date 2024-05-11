import Button from 'components/Button/Button';
import { Item, Text } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from '../../redux/contacts/operations';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const deleteContactById = () => {
    dispatch(deleteContact(id));
    toast.success('Element deleted successfully!', {
      position: 'top-right',
      style: {
        backgroundColor: '#ffcc00',
        color: '#333',
      },
    });
  };

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Button onClick={deleteContactById}>Delete</Button>
    </Item>
  );
};

export default ContactItem;
