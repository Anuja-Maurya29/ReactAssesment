
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(state.user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { addUser, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
