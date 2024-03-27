import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navSlide: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navSlide = !state.navSlide;
    },
  },
});

export const { toggleNav } = appSlice.actions;
export default appSlice.reducer;
