import React from 'react';
import {
  Divider,
  Drawer,
  ListItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from '@mui/material';

import {
  NavigateBefore,
  Menu as MenuIcon,
  Adb as AdbIcon,
} from '@mui/icons-material';
import { NavDrawerList } from './styles';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import AccountPopover from '../AccountPopover';

const NavItemsList = styled(Box)(({ theme }) => ({
  gap: '1.5rem',
  flexGrow: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',

  '& a:hover': {
    '& h6': {
      color: theme.palette.primary.main,
    },
  },
}));

const navbarItems = [
  { name: 'NODES', url: '/dashboard/nodes' },
  { name: 'COMMUNITY', url: '/dashboard/community' },
  { name: 'AMBASSADPRS', url: '/dashboard/ambassadors' },
  { name: 'CONTACT', url: '/dashboard/contact' },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setAnchorElNav(!anchorElNav);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar
      color='transparent'
      sx={{
        // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)', // Fix on Mobile
      }}
    >
      <Container
        maxWidth='lg'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            flexBasis: '70%',
          }}
        >
          <NavItemsList
            sx={{
              display: { md: 'flex' },
            }}
          >
            {navbarItems.map((el, i) => (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && '#54D62C',
                })}
                key={el.url}
                to={el.url}
              >
                <Typography variant='subtitle2' noWrap>
                  {el.name}
                </Typography>
              </NavLink>
            ))}
          </NavItemsList>
        </Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        <AccountPopover />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
