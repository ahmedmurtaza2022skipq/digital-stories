import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  avatar: "http://localhost:5544/storage/default.png",
};

export const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    resetUserReg: (state, action) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.avatar = "http://localhost:5544/storage/default.png";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setEmail, setPassword, setAvatar, resetUserReg } =
  userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
