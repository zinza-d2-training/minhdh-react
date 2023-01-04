import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { removeStoreItem } from '../../utils/localStorage';
import api from '../../utils/axios/instance';
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  identifyCard: string;
  birthday: Date;
  gender: number;
  wardId: number;
  type: number;
  tokenResetPassword: string;
  createdAt: Date;
  updatedAt: Date;
  ward?: Ward;
}

export interface Ward {
  id: number;
  districtId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  district?: District;
}

export interface District {
  id: number;
  provinceId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  province?: Province;
}

export interface Province {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface AuthState {
  user: Partial<User>;
  isAdmin: boolean;
  isLogin: boolean;
  isFetching: boolean;
  error: boolean;
}
const initialState: AuthState = {
  user: {},
  isAdmin: false,
  isLogin: false,
  isFetching: false,
  error: false
};

export const fetchUserLogin = createAsyncThunk(
  'user/verify',
  async (token: string): Promise<{ user: User; isAdmin: boolean }> => {
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
      state.user = {};
      state.isAdmin = false;
      state.isLogin = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload.data;
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
        state.isAdmin = false;
      });
  }
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const { logout, updateUser } = AuthSlice.actions;
export default AuthSlice.reducer;
