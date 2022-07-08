import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { NavBar, Hero, Section, Footer } from 'components';
import React from 'react';
import { styled } from '@mui/material/styles';
import faker from 'faker';
import search from 'assets/searchIcon.png';
import equip from 'assets/equipIcon.png';
import map from 'assets/mapIcon.png';
import module from 'assets/moduleIcon.png';
import { Circle, FiberManualRecord } from '@mui/icons-material';

const SectionTextGap = styled(Typography)((theme) => ({
  '&:not(:last-child)': {
    marginBottom: '1.5rem',
  },
}));
const ValuesWrapper = styled(Box)((theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  textAlign: 'center',
  paddingInline: '2rem',
}));

const CustomSection = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f6fa',
  fontStyle: 'italic',
  paddingInline: '1rem',
  paddingBlock: '3rem',
}));

const FooterForm = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingLeft: 16,
  paddingTop: '2rem',
  '& > div': {
    '& > div:first-of-type': {
      padding: '3rem',
      backgroundColor: theme.palette.primary.main,
    },
    '& > div:last-child': {
      padding: '3rem',
    },
  },
}));

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Container maxWidth='lg'> */}
      <Hero />
      <Section id='our-why' title='Why ValueColony?'>
        <Typography
          variant='subtitle1'
          fontWeight='normal'
          align='center'
          marginTop='1rem'
        >
          We all are created uniquely and owe it to ourselves to do things that
          interest and inspire us but also adding value to others while doing
          it.
        </Typography>
        <Typography
          variant='subtitle1'
          fontWeight='normal'
          align='center'
          marginTop='1rem'
        >
          Furthermore, no time in history have we had the level of access to
          information and the capacity to use that information in ways that can
          make a difference to us and others. Combining both facts leads us to
          believe that it's time for us to start building our world around
          opportunities that makes sense to us
        </Typography>
        <Typography
          variant='subtitle1'
          fontWeight='normal'
          align='center'
          marginTop='1rem'
        >
          To build our personal digital portfolio as distributed both also
          connected array of engagements ranging from things we can create, to
          projects we can co-create or work with others on,to products and
          services we can promote and also new ideas we can invest in.
        </Typography>
        <Typography
          variant='subtitle1'
          fontWeight='normal'
          align='center'
          marginTop='1rem'
        >
          Having all these engagements built and connected based on our self
          attributes , goals and impact we hope to make
        </Typography>

        <Box
          display='flex'
          justifyContent='center'
          sx={{ marginTop: '4.5rem', marginBottom: '-1rem' }}
        >
          <Button
            color='primary'
            size='large'
            variant='contained'
            sx={{ minWidth: 150 }}
          >
            Read More
          </Button>
        </Box>
      </Section>
      <Section id='how-we-do-it' title='How We Do It?'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <ValuesWrapper>
              <Avatar
                alt='strategy-find'
                variant='square'
                src={search}
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
                Find
              </Typography>
              <Typography
                variant='subtitle2'
                fontWeight='normal'
                align='center'
              >
                We scout and find opportunities where they exist on the internet
              </Typography>
            </ValuesWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ValuesWrapper>
              <Avatar
                alt='strategy-map'
                variant='square'
                src={map}
                sx={{ width: 80, height: 80, color: 'red' }}
              />
              <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
                Map
              </Typography>
              <Typography
                variant='subtitle2'
                fontWeight='normal'
                align='center'
              >
                We map these opportunities to individual self attribute using
                our mapping algorithm
              </Typography>
            </ValuesWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ValuesWrapper>
              <Avatar
                alt='strategy-map'
                variant='square'
                src={equip}
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
                Equip
              </Typography>
              <Typography
                variant='subtitle2'
                fontWeight='normal'
                align='center'
              >
                We provide tools,resource and engagement to help you pursue such
                opportunities based on you unique input
              </Typography>
            </ValuesWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ValuesWrapper>
              <Avatar
                alt='strategy-map'
                variant='square'
                src={module}
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
                Build
              </Typography>
              <Typography
                variant='subtitle2'
                fontWeight='normal'
                align='center'
              >
                We help build your portfolio of engagements into a web of
                connect opportunities that is central to your self attribute, so
                as to give you the needed control and fulfillment of self
              </Typography>
            </ValuesWrapper>
          </Grid>
        </Grid>
      </Section>
      <CustomSection>
        <Container maxWidth='lg'>
          <Box
            display='flex'
            alignItems='center'
            flexDirection='column'
            gap={4}
          >
            <Typography variant='h6' align='center'>
              “Our hope is to redefine people’s approach to living in a more
              dynamic, smart,fulfilling and engaging way, built around what
              works for you and adds value to others.”
            </Typography>
            <Typography variant='h4' align='center'>
              ValueColony is yours to build your world with.
            </Typography>
            <Button
              size='large'
              variant='contained'
              sx={{ minWidth: 150, backgroundColor: 'primary.light' }}
            >
              Explore Us
            </Button>
          </Box>
        </Container>
      </CustomSection>
      {/* <Section id='our-beliefs' title='Our Beliefs'>
        <Typography variant='h5' fontWeight='normal'>
          Our Belief is centered around five important things:
        </Typography>

        <List
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ListItem
            sx={{
              listStyleType: 'disc',
            }}
          >
            <ListItemIcon>
              <FiberManualRecord fontSize='5px' />
            </ListItemIcon>{' '}
            <ListItemText primary='  Out Belief is that world revolves around value exchange.' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize='5px' />
            </ListItemIcon>{' '}
            <ListItemText
              primary='That each one of us have the capacity to uniquely
            add value to others through our self attribute.'
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize='5px' />
            </ListItemIcon>{' '}
            <ListItemText
              primary='That in adding value to other around what makes
            sense to us we also get to be rewarded in earnings and sense of
            fullfilment.'
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize='5px' />
            </ListItemIcon>{' '}
            <ListItemText
              primary='That the digigtal space gives us the capacity to
            find and engage with these oppoutunities while also visualising how
            they connect and combine with new opportinuties.'
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize='5px' />
            </ListItemIcon>{' '}
            <ListItemText
              primary='We can achieve this through various value adding
            ways such as creating value, turning your idea into a solution,
            co-creating value with others, taking up roles that aligns with who
            you are in various organization, promoting created value.'
            />
          </ListItem>
        </List>
      </Section> */}

      <FooterForm display='flex'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ paddingInline: '6rem !important' }}>
            <Typography id='contact-us' variant='h4' sx={{ color: '#fff' }}>
              We would love to hear from you. Drop us a note and we would get
              back to you. Thanks
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  label='First Name'
                  placeholder='first name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='lastName'
                  label='Last Name'
                  placeholder='last name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='someone@mail.com'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='phone'
                  type='number'
                  label='Phone'
                  placeholder='+921222122'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='message'
                  label='Message'
                  multiline
                  placeholder='your message'
                  fullWidth
                  rows={3}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box mt={4} display='flex' justifyContent='flex-end'>
                  <Button color='primary' variant='contained'>
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FooterForm>
      <Footer />
      {/* </Container> */}
    </React.Fragment>
  );
};

export default Home;
