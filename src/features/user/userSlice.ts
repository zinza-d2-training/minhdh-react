import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { saveLocalStorage } from '../../utils/localStorage';
import api from '../../utils/axios/instance';
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

export const loginAsync = createAsyncThunk(
  'user/fetchLogin',
  async (payload: InputUser): Promise<ReturnToken> => {
    try {
      const response = await api.post<ReturnToken>('/auth/login', payload);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        saveLocalStorage('token', action.payload.token);
        state.error = false;
        state.token = action.payload.token;
        state.isFetching = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  }
});
export const selectToken = (state: RootState) => state.user.token;
export const selectError = (state: RootState) => state.user.error;
export const selectIsFetching = (state: RootState) => state.user.isFetching;
export default UserSlice.reducer;
