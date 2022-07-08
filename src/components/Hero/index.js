import { Grid, Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import heroImg from 'assets/heroImg.png';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeaderImage = styled('img')(({ theme }) => ({
  paddingBlock: '1rem',
  height: '100%',
  width: '100%',
  position: 'relative',

  '& img': {
    width: '100%',
    objectFit: 'contain',
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    paddingInline: '1rem',
    paddingBlock: '2rem',
  },
}));

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3} my={4} px={1}>
        <Grid item xs={12} sm={6}>
          <Box
            display='flex'
            sx={{
              alignItems: { xs: 'center', sm: 'flex-start' },
              gap: 1,
            }}
            flexDirection='column'
            justifyContent='center'
            height='100%'
          >
            <Typography variant='h3'>ValueColony</Typography>
            <Typography
              variant='subtitle1'
              fontWeight='normal'
              marginTop='0.5rem'
              marginBottom='0.5rem'
            >
              Your digital platform that maps your self attributes to
              various value based opportunities on the internet and
              provides ways for you to explore such opportunities with
              your unique input , digital tools, strategy based
              challenges, community support and progress visualization
              to know the next connected opportunity.
            </Typography>
            <Button
              onClick={handleGetStarted}
              variant='contained'
              color='primary'
              sx={{ minWidth: 185, backgroundColor: 'primary.main' }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <HeaderImage src={heroImg} alt='Value-Hero' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
