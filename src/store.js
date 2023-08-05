import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { urlReducer } from "./feautures/convert-bar-slice";

const config = {
   key: "root",
   storage,
}

const persistedReducer = persistReducer(config, urlReducer);

export const store = configureStore({
   reducer: persistedReducer,
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistedStore = persistStore(store);