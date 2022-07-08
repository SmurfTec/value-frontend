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
import { styled } from '@mui/material/styles';
import logo from '../../assets/Transparent-File.png';

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
  { name: 'Our Why?', url: '#how-we-do-it' },
  { name: 'How We Do It?', url: '#how-we-do-it' },
  // { name: 'Our Beliefs', url: '/our-beliefs' },
  { name: 'Contact Us', url: '#contact-us' },
  // { name: 'Partner Programs', url: '/partner-programs' },
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
    <AppBar position='static' color='transparent' sx={{ boxShadow: 'none' }}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box>
            <Link component={Link} to='/'>
              <img
                src={logo}
                width={50}
                height={60}
                alt='logo'
                style={{ marginTop: '10px', paddingRigh: '10px' }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleDrawerToggle}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              // anchor={anchorElNav}
              open={anchorElNav}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Box
                px={2}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box p={2} sx={{ display: 'flex', gap: '0.25rem' }}>
                  <img
                    src={logo}
                    width={50}
                    height={60}
                    alt='logo'
                    style={{ marginTop: '10px', paddingRigh: '10px' }}
                  />
                </Box>
                <IconButton onClick={handleDrawerToggle} size='small'>
                  <NavigateBefore />
                </IconButton>
              </Box>

              <Divider />

              <Box mt={4} />

              <NavDrawerList>
                {navbarItems.map((el) => (
                  <a
                    // style={({ isActive }) => {
                    //   console.log(`isActive of ${el.url}`, isActive);
                    //   return {
                    //     color: isActive && '#54D62C',
                    //   };
                    // }}
                    href={el.url}
                    // className={classes_g.linkHover}
                    onClick={handleDrawerToggle}
                  >
                    <ListItem button>
                      <Typography variant='subtitle1'>{el.name}</Typography>
                    </ListItem>
                  </a>
                ))}
                <Divider />

                <Box
                  my={2}
                  mx={2}
                  display='flex'
                  flexDirection='column'
                  gap={1}
                >
                  <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    fullWidth
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  {/* {!isLoggedIn && ( */}
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => navigate('/register')}
                    fullWidth
                  >
                    Signup
                  </Button>
                  {/* )} */}
                </Box>
              </NavDrawerList>
            </Drawer>

            {/* <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navbarItems.map((el) => (
                <MenuItem
                  key={`${el.url}-${el.name}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{el.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <NavItemsList
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navbarItems.map((el, i) => (
              <a
                href={el.url}
                // href={'#how-we-do-it'}
                // style={({ isActive }) => ({
                //   color: isActive && '#54D62C',
                // })}
              >
                <Typography variant='subtitle2' noWrap>
                  {el.name}
                </Typography>
              </a>
            ))}
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button variant='contained' onClick={() => navigate('/register')}>
                SignUp
              </Button>
            </Box>
          </NavItemsList>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
