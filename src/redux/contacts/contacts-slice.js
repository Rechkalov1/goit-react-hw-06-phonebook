import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsInitialState = { contacts: [] };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (state, { payload }) => {
      state.filter(({ id }) => id !== payload);
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
