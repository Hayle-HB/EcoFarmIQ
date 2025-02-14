// redux
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
  },
});
