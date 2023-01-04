import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth';
import { forgotPasswordReducer } from '../features/user';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    forgotPassword: forgotPasswordReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
