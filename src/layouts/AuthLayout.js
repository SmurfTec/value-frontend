import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
// components
// import Logo from '../components/Logo';
//
import { MHidden } from '../components/@material-extend';
import { Adb as AdbIcon } from '@mui/icons-material';
import logo from '../assets/Transparent-File.png';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

// ----------------------------------------------------------------------

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default function AuthLayout({ children }) {
  return (
    <HeaderStyle>
      <RouterLink to='/'>
        <Box display='flex' flexWrap='nowrap'>
          <img
            src={logo}
            width={50}
            height={60}
            alt='logo'
            style={{ marginTop: '10px', paddingRigh: '10px' }}
          />
        </Box>
      </RouterLink>

      <MHidden width='smDown'>
        <Typography
          variant='body2'
          sx={{
            mt: { md: -2 },
          }}
        >
          {children}
        </Typography>
      </MHidden>
    </HeaderStyle>
  );
}
