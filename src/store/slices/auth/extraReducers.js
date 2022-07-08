import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from 'api/users';
import { toast } from 'react-toastify';

export const getMe = createAsyncThunk(
  '/auth/getMe',
  async (_, { rejectWithValue }) => {
    return userApi
      .getMe()
      .then((res) => ({ token: res.data.token, user: res.data.user }))
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const updatePassword = createAsyncThunk(
  '/auth/update-password',
  async (newProfile, { rejectWithValue }) => {
    return userApi
      .updatePassword(newProfile)
      .then((res) => ({ user: res.data.user }))
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const updateAttributes = createAsyncThunk(
  '/auth/updateAttributes',
  async (newProfile, { rejectWithValue }) => {
    return userApi
      .updateMe(newProfile, false)
      .then((resData) => ({ user: resData.user }))
      .catch((err) => {
        toast.error(err.message || 'Something Went Wrong');
        return rejectWithValue(err);
      });
  }
);
export const updateMe = createAsyncThunk(
  '/auth/updateMe',
  async (newProfile, { rejectWithValue }) => {
    return userApi
      .updateMe(newProfile)
      .then((resData) => ({ user: resData.user }))
      .catch((err) => {
        toast.error(err.message || 'Something Went Wrong');
        return rejectWithValue(err);
      });
  }
);

export const login = createAsyncThunk(
  '/auth/login',
  async (values, { rejectWithValue }) => {
    return userApi
      .logIn(values)
      .then((res) => ({ token: res.data.token, user: res.data.user }))
      .catch((err) => {
        toast.error(err);
        return rejectWithValue(err);
      });
  }
);

export const signUp = createAsyncThunk(
  '/auth/signUp',
  async (values, { rejectWithValue }) => {
    return userApi
      .signUp(values)
      .then((resData) => ({ message: resData.message }))
      .catch((err) => {
        toast.error(err.message || 'Something Went Wrong');
        return rejectWithValue(err);
      });
  }
);
