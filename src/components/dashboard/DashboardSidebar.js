import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from '@mui/material';
// components
import Logo from 'components/Logo';
import Scrollbar from 'components/Scrollbar';
import NavSection from 'components/NavSection';
import { MHidden } from 'components/@material-extend';
//
import { config } from './SidebarConfig';
import { useSelector } from 'react-redux';
import logo from '../../assets/Transparent-File.png';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 250;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,

  backgroundColor: theme.palette.grey[200],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}) {
  const { pathname } = useLocation();
  const { user } = useSelector((st) => st.auth);

  const [navConfig, setNavConfig] = useState();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  useEffect(() => {
    setNavConfig(config);
  }, [user]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        paddingTop: '1rem',

        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          px: 4.5,
          py: 3,
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Link component={Link} to='/'>
          <img src={logo} width={70} height={80} alt='logo' />
        </Link>
        {/* <Typography variant='h6' sx={{ color: 'text.primary' }}>
          ValueColony
        </Typography> */}
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline='none' component={RouterLink} to='#'>
          <AccountStyle>
            <Avatar src={user.image} alt='photoURL' />
            <Box sx={{ ml: 2 }}>
              <Typography
                variant='subtitle2'
                sx={{ color: 'text.primary' }}
              >
                {user.name}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'text.secondary' }}
              >
                {user.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}></Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width='mdUp'>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width='mdDown'>
        <Drawer
          open
          variant='persistent'
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
