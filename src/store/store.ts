// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import productSlice from "./productSlice";
// import quantityReducer from "./quantitySlice";
// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     products: productSlice,
//     quantity: quantityReducer,
//   },
// });

// export default store
// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import quantityReducer from "./quantitySlice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["quantity"], // only persist the quantity slice
};

const rootReducer = combineReducers({
  auth: authSlice,
  products: productSlice,
  quantity: quantityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
