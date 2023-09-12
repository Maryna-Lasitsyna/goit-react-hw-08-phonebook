import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setContactsFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
