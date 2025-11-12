// src/features/ui/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  theme: "light", 
  modal: null, 
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setModal(state, action) {
      state.modal = action.payload; // can be modal name or null
    },
    resetUI(state) {
      state.loading = false;
      state.error = null;
      state.modal = null;
    },
  },
});

export const { setLoading, setError, toggleTheme, setModal, resetUI } = uiSlice.actions;
export default uiSlice.reducer;
