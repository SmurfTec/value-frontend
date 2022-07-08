import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Navbar from './NavBar';
import logo from '../../assets/Transparent-File.png';
import AccountPopover from './AccountPopover';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 0,
  // paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 0,
    // paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);
  const { users } = [
    {
      name: '',
      email: '',
      avatar: '',
    },
  ];

  // if (!users) {
  //   // dispatch(getAllUsers());
  //   return;
  // }

  return (
    <RootStyle>
      {/* <Navbar /> */}
      {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
        <div id='community'></div>
      </MainStyle>
    </RootStyle>
  );
}
