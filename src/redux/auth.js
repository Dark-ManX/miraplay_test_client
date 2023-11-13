import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "./authAPI";

export const auth = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.userSignIn.matchFulfilled,
      (state, { payload: { payload } }) => {
        state.token = payload;
      }
    );
  },
});

export const { signInUser } = auth.actions;

export default auth.reducer;
