import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { saveLocalStorage } from '../../utils/localStorage';
export interface UserState {
  token: string;
  isFetching: boolean;
  error: boolean;
}
const initialState: UserState = {
  token: '',
  isFetching: false,
  error: false
};

export interface InputUser {
  email: string;
  password: string;
}

export interface ReturnToken {
  token: string;
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      saveLocalStorage('token', action.payload.token);
      state.error = false;
      state.token = action.payload.token;
      state.isFetching = false;
    }
  }
});
export const selectToken = (state: RootState) => state.user.token;
export const selectError = (state: RootState) => state.user.error;
export const selectIsFetching = (state: RootState) => state.user.isFetching;
export const { login } = UserSlice.actions;
export default UserSlice.reducer;
