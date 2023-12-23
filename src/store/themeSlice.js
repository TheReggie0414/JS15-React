import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const useThemeSelector = () => useSelector((state) => state.theme);
