import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem("theme") === "dark" || false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
    setDarkTheme: (state) => {
      state.isDarkMode = true;
      localStorage.setItem("theme", "dark");
    },
    setLightTheme: (state) => {
      state.isDarkMode = false;
      localStorage.setItem("theme", "light");
    },
  },
});

export const { toggleTheme, setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
