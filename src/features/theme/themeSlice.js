import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: true,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.isOpen = !state.isOpen;
    },
    setDarkTeam: (state) => {
      state.isOpen = true;
    },
    closeDarkTheme: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleDarkTheme, setDarkTeam, closeDarkTheme } =
  themeSlice.actions;
export default themeSlice.reducer;
