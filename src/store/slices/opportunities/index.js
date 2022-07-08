import { createSlice } from '@reduxjs/toolkit';
import { TOKEN_KEY } from 'api';
import { toast } from 'react-toastify';
import { getAllOpportunities } from './extraReducers';

const initialState = {
  opportunities: [],
  loading: true,
};

const authSlice = createSlice({
  name: 'opportunities',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllOpportunities.fulfilled]: (state, { payload }) => ({
      loading: false,
      opportunities: payload.opportunities,
    }),
    [getAllOpportunities.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

// export const {} = authSlice.actions;
export default authSlice;
