import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ErrorTitle, SecondaryTitle, Title } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      {error && <ErrorTitle>Error: {error}</ErrorTitle>}
      {isLoading && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ToastContainer />
      <ContactList />
    </Wrapper>
  );
};
