import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: [`token`],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
