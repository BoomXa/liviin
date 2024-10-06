import { configureStore } from '@reduxjs/toolkit';
import authReducer from './lib/redux/auth/authSlice';
import userReducer from './lib/redux/auth/userSlice';
import propertyReducer from './lib/redux/property/propertySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    property: propertyReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState}
export type AppDispatch = typeof store.dispatch;

export default store;
