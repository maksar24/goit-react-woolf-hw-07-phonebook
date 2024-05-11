import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { handleFulfilled, handlePending, handleRejected } from './helper';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.items = payload;
      })
      .addCase(addContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
        const index = contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        contacts.items.splice(index, 1);
      })
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
