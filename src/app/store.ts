import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../features/Login/LoginSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
