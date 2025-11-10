import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    resetUserData: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const { setLoggedIn, setUserData, resetUserData } = counterSlice.actions;
export default counterSlice.reducer;
