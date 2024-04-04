import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navSlide: false,
  rTheme: localStorage.getItem('theme') as null | 'dark' | 'light',
  direction: localStorage.getItem('direction') as null | 'rtl' | 'ltr',
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
    setDirection: (state, { payload }) => {
      localStorage.setItem('direction', payload);
      state.direction = payload;
    },
  },
});

export const { toggleNav, changeTheme, setDirection } = appSlice.actions;
export default appSlice.reducer;
