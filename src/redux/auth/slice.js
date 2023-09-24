import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './actions';

const initialState = {
  user: { username: null, email: null },
  token: null,
  authError: null,
  isLoggedIn: false,
  isAuthLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        action => action.type === 'auth/pending',
        state => {
          state.isAuthLoading = true;
        }
      )
      .addMatcher(
        action => action.type === 'auth/fulfilled',
        state => {
          state.authError = null;
          state.isAuthLoading = false;
        }
      )
      .addMatcher(
        action => action.type === 'auth/rejected',
        (state, action) => {
          state.authError = action.payload;
          state.isAuthLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
