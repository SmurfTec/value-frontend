import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/slices/auth';

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  return <div></div>;
};

export default Logout;
