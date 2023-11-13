import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authAPI } from "./authAPI";
import auth from "./auth";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedUserReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    auth: persistedUserReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
