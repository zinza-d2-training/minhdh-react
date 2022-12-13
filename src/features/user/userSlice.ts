import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { saveLocalStorage } from '../../utils/localStorage';
import { fetchLogin, User } from './userApi';
export interface UserState {
  info: User | null;
  token: string | null;
  isFetching: boolean;
  error: boolean;
}
const initialState: UserState = {
  info: null,
  token: null,
  isFetching: false,
  error: false
};
export const loginAsync = createAsyncThunk(
  'user/fetchLogin',
  async (payload: User) => {
    const response = await fetchLogin(payload);
    return response.data;
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
export const selectUser = (state: RootState) => state.user.info;
export const selectToken = (state: RootState) => state.user.token;
export const selectError = (state: RootState) => state.user.error;
export const selectIsFetching = (state: RootState) => state.user.isFetching;
export default UserSlice.reducer;
