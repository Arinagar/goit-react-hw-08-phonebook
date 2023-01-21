import { createSlice } from '@reduxjs/toolkit';

import { loginUser, registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
    // .addCase(deleteContact.fulfilled, (state, { payload }) => {
    //   state.items = state.items.filter(contact => contact.id !== payload);
    // })
    // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    // .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
    // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
