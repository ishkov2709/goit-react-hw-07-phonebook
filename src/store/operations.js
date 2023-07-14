import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b1abb1062767bc482684ba.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async item => {
    const { data } = await axios.post('/contacts', item);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
