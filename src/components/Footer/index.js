import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const footerItems = {
  home: [
    { name: 'Our Why?', url: '/#our-Why' },
    { name: 'How We Do It?', url: '/#how-we-do-it' },
    { name: 'Our Beliefs', url: '/#our-beliefs' },
    // { name: 'Pricing', url: '/pricing' },
  ],
  // company: [{ name: 'About Us', url: '/about-us' }],
  legal: [
    { name: 'Terms & Conditions', url: '/' },
    { name: 'Privacy Policy', url: '/' },
    { name: 'Contact', url: '/contact-us' },
  ],
  // Help: [],
};

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#34DF7A ',
  // backgroundColor: theme.palette.primary.main,
  marginTop: 0.3,
  paddingInline: '2rem',
  paddingBlock: '3.25rem',
  color: theme.palette.common.white,
  minHeight: 350,
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5' sx={{ maxWidth: 200 }}>
              Need Help with Anything?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box display='flex' gap={9} justifyContent='flex-end'>
              {Object.keys(footerItems).map((key) => (
                <Box
                  key={`${key}-${footerItems[key]}`}
                  display='flex'
                  gap={3}
                  flexDirection='column'
                >
                  <Typography
                    variant='subtitle1'
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {key}
                  </Typography>

                  {footerItems[key].length !== 0 &&
                    footerItems[key].map((el) => (
                      <Typography
                        sx={{ textDecoration: 'none', color: '#fff' }}
                        component={Link}
                        to={el.url}
                        key={`${el.url}-${el.name}`}
                        variant='body2'
                      >
                        {el.name}
                      </Typography>
                    ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
