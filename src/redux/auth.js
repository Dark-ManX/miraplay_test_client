import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "./authAPI";

export const userSlice = createSlice({
  name: "user",
  initialState: { email: null, token: null },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.userSignIn.matchFulfilled,
      (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
      }
    );
  },
});

export const { signInUser } = userSlice.actions;

export default userSlice.reducer;
