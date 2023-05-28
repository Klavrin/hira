import { createSlice } from "@reduxjs/toolkit";

const initialsSlice = createSlice({
  name: "initials",
  initialState: {
    isLoggedIn: false,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
});

export const { login, setUsername } = initialsSlice.actions;
export default initialsSlice.reducer;
