// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
// import { images } from 'constants';
import { AppBar, Box, Drawer, List } from '@mui/material';

const drawerWidth = 230;

export const NavWrapper = styled('div')(({ theme }) => ({
  '& .MuiPaper-root': {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  },

  '& h4': {
    alignSelf: 'start',
  },
}));
export const NavBar = styled(AppBar)(({ theme }) => ({
  // backgroundColor: theme.palette.common.darkFore,
  columnGap: 10,

  '& .MuiToolbar-regular': {
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '2.5em',
    margin: '0rem 2rem 0rem',
  },
  '& a': {
    // color: theme.custom.white,
    verticalAlign: 'middle',
    // '&.active': {
    // color: theme.palette.primary.main,
    // },
  },

  [theme.breakpoints.up('lg')]: {
    '& .MuiToolbar-regular': {
      margin: '0rem 8rem 0rem',
    },
  },
}));
export const NavItemsList = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  '& li': {
    margin: '0 1rem',
    cursor: 'pointer',
    flexDirection: 'column',

    '& > a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      // background: theme.palette.custom.white,
      transition: 'width .5s',
    },
    '& > a:hover::after, & > a.active::after': {
      width: '100%',
    },
  },
}));
export const NavBarWeb = styled('ul')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up(1015)]: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '2.5em',
  },
}));
export const NavBarMobile = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  [theme.breakpoints.up(1015)]: {
    display: 'none',
  },
}));

export const NavDrawerList = styled(List)(({ theme }) => ({
  '& > a': {
    color: theme.palette.text.primary,

    '& .MuiTypography-subtitle1::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: '#000',
      transition: 'width .5s',
    },
    '&.active,:hover': {
      '& h6::after': {
        width: '100%',
      },
    },
    '& .MuiListItem-root': {
      columnGap: '1.4em',
    },
  },
}));
