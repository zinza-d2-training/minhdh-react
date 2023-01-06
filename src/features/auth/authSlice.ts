import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { removeStoreItem } from '../../utils/localStorage';
export interface User {
  id: number;
  name: string;
  email: string;
  identity_card_number: string;
  isAdmin: number;
  birthday: Date;
  gender: number;
  ward_id: number;
  reset_token: string;
}

export interface AuthState {
  user: User | null;
  isAdmin: number;
  isLogin: boolean;
  isFetching: boolean;
  error: boolean;
}
const initialState: AuthState = {
  user: null,
  isAdmin: 0,
  isLogin: false,
  isFetching: false,
  error: false
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      removeStoreItem('token');
      state.user = null;
      state.isAdmin = 0;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
      state.isAdmin = action.payload.user.isAdmin;
    }
  }
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const { logout, updateUser } = AuthSlice.actions;
export default AuthSlice.reducer;
