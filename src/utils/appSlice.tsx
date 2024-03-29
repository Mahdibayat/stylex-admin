import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navSlide: false,
  rTheme: localStorage.getItem('theme') as null | 'dark' | 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navSlide = !state.navSlide;
    },
    changeTheme: (state, { payload }) => {
      localStorage.setItem('theme', payload);
      state.rTheme = payload;
    },
  },
});

export const { toggleNav, changeTheme } = appSlice.actions;
export default appSlice.reducer;
