import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAddContactApi, getContactsApi, getDeleteContactApi } from 'api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getContactsApi()
);

export const addContact = createAsyncThunk('contacts/addContact', contactId =>
  getAddContactApi(contactId)
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  contactId => getDeleteContactApi(contactId)
);
