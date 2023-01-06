import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { removeStoreItem } from '../../utils/localStorage';
import api from '../../utils/axios/instance';
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

export const fetchUserLogin = createAsyncThunk(
  'user/verify',
  async (token: string): Promise<{ user: User; isAdmin: number }> => {
    try {
      const response = await api.get(`auth/token`, {
        params: {
          token: token
        }
      });
      return response.data;
    } catch (error: any) {
      throw new Error();
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAdmin = action.payload.isAdmin;
        state.isLogin = true;
      })
      .addCase(fetchUserLogin.rejected, (state) => {
        removeStoreItem('user');
        removeStoreItem('token');
        state.isFetching = false;
        state.error = true;
        state.isLogin = false;
        state.isAdmin = 0;
      });
  }
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const { logout, updateUser } = AuthSlice.actions;
export default AuthSlice.reducer;
