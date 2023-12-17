import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilteredContacts(state, action) {
      return action.payload;
    },
  },
});

export const { setFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
