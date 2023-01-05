import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import api from '../../utils/axios/instance';
export interface ForgotPasswordState {
  message: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  loading: boolean;
}

const initialState: ForgotPasswordState = {
  message: '',
  status: 'idle',
  loading: false
};
interface Payload {
  email: string;
}
export const forgotPasswordAsync = createAsyncThunk(
  'user/forgotPassword',
  async (payload: Payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await api.post('/forgot-password', payload);
      return fulfillWithValue(res.data.message);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message[0]);
    }
  }
);

export const ForgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    resetDefault: (state) => {
      state.loading = false;
      state.status = 'idle';
      state.message = '';
    },
    success: (state, action) => {
      state.message = action.payload as string;
      state.status = 'succeeded';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordAsync.pending, (state) => {
        state.status = 'pending';
        state.loading = true;
      })
      .addCase(forgotPasswordAsync.fulfilled, (state, action) => {
        state.message = action.payload as string;
        state.status = 'succeeded';
        state.loading = false;
      })
      .addCase(forgotPasswordAsync.rejected, (state, action) => {
        state.message = action.payload as string;
        state.status = 'failed';
        state.loading = false;
      });
  }
});

export const { resetDefault, success } = ForgotPasswordSlice.actions;
export const selectState = (state: RootState) => state.forgotPassword;
export default ForgotPasswordSlice.reducer;
