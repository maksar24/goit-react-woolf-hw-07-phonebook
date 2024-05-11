import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.contacts.items;

export const selectIsLoading = ({ contacts }) => contacts.contacts.isLoading;

export const selectError = ({ contacts }) => contacts.contacts.error;

export const selectFilterValue = ({ filter }) => filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
