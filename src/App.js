import React, { useEffect } from 'react';
import { ScrollToTop } from 'components';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';
import Router from 'router';
import { getAllOpportunities } from 'store/slices/opportunities/extraReducers';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from 'store/slices/auth/extraReducers';

const App = () => {
  const { opportunities, loading } = useSelector((st) => st.opportunities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  useEffect(() => {
    if (loading && !opportunities.length) dispatch(getAllOpportunities());
  }, [loading]);

  return (
    <ThemeConfig>
      {/* <ScrollToTop /> */}
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
};

export default App;
