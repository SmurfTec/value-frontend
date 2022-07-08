import { createSlice } from '@reduxjs/toolkit';
import { TOKEN_KEY } from 'api';
import { toast } from 'react-toastify';
import {
  getMe,
  login,
  updateMe,
  signUp,
  updatePassword,
  updateAttributes,
} from './extraReducers';

const initialState = {
  authenticating: true,
  user: null,
  token: localStorage.getItem(TOKEN_KEY) || null,
  loading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
    login: (state, { payload }) => {
      localStorage.setItem(TOKEN_KEY, 'payload.token');
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.token,
      };
    },
  },
  extraReducers: {
    [getMe.pending]: (state, { payload }) => {
      state.authenticating = true;
    },
    [getMe.fulfilled]: (state, { payload }) => ({
      authenticating: false,
      token: payload.token,
      user: payload.user,
      isLoggedIn: true,
    }),
    [getMe.rejected]: (state, { payload }) => {
      state.authenticating = false;
    },
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem(TOKEN_KEY, payload.token);
      return {
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        loading: false,
        authenticating: false,
      };
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
    },

    [signUp.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      toast.success(payload.message);
      state.loading = false;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
    },

    [updateAttributes.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [updateAttributes.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      isLoggedIn: true,
    }),
    [updateMe.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [updateMe.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      isLoggedIn: true,
    }),
    [updatePassword.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [updatePassword.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      isLoggedIn: true,
    }),
  },
});

export const { logout, login: loginDirect } = authSlice.actions;
export default authSlice;
