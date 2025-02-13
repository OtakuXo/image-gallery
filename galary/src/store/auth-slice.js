import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = "";
    },
    login(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
