import axios from 'axios';

axios.defaults.baseURL = 'https://616742b1ba841a001727c2c5.mockapi.io';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const getAddContactApi = async contactId => {
  const { data } = await axios.post('/contacts', contactId);
  return data;
};

export const getDeleteContactApi = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
