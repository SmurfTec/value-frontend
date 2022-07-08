import { createAsyncThunk } from '@reduxjs/toolkit';
import * as opportunitiesApi from 'api/opportunities';
import { toast } from 'react-toastify';

export const getAllOpportunities = createAsyncThunk(
  '/auth/getAllOpportunities',
  async (values, { rejectWithValue }) => {
    return opportunitiesApi
      .getAll()
      .then((res) => ({ opportunities: res.data.opportunities }))
      .catch((err) => {
        toast.error(err.message || 'Something Went Wrong');
        return rejectWithValue(err);
      });
  }
);
