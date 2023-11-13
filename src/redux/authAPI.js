import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API from "../additional";

const { REQUEST_ADDRESS } = API;

// Define a service using a base URL and expected endpoints
export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${REQUEST_ADDRESS}` }),
  endpoints: (builder) => ({
    userSignIn: builder.mutation({
      query: (payload) => {
        console.log("in reducer", payload);
        return {
          url: "/users/signIn",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useUserSignInMutation } = authAPI;
