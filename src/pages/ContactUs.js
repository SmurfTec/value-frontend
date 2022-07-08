import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRight';
import { useManyInputs } from 'react-nice-hooks';
import { Footer, NavBar } from 'components';

const PREFIX = 'ContactUs';

const classes = {
  container: `${PREFIX}-container`,
  innerCont: `${PREFIX}-innerCont`,
  contactMain: `${PREFIX}-contactMain`,
  formDiv: `${PREFIX}-formDiv`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: 'flex',
    marginBottom: '-2.4rem',
  },

  [`& .${classes.innerCont}`]: {
    width: '100%',
    paddingInline: '3rem',
    paddingBlock: '4rem',
  },

  [`& .${classes.contactMain}`]: {
    paddingBlock: '3rem',
    paddingInline: '2rem',

    position: 'relative',
  },

  [`& .${classes.formDiv}`]: {
    padding: '2rem',
    margin: '0 auto',
    boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
    WebkitBoxShadow: '0 0 25px rgb(0 0 0 / 10%)',
    borderRadius: 10,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      // float: 'right',
      width: '90%',
      maxWidth: 1000,
      paddingLeft: '7rem',
    },
  },
}));

const ContactUs = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [inputState, handleTxtChange, , , resetState, ,] =
    useManyInputs(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Root>
      {/* <NavBar /> */}
      <section className={classes.container}>
        <div className={classes.innerCont}>
          {/* <Box my={2}>
            <Typography variant='h4' align='center'>
              Contact Us
            </Typography>
          </Box> */}

          <div className={classes.contactMain}>
            <div className={classes.formDiv}>
              <Typography variant='h5' color='textPrimary'>
                Get in Touch
              </Typography>
              <Box mb={3}>
                <Typography variant='body1' color='textSecondary'>
                  Feel free to drop us a line below!
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='name'
                      value={inputState.name}
                      label='Your Name'
                      onChange={handleTxtChange}
                      fullWidth
                      variant='outlined'
                      required
                      placeholder='Your Name'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='email'
                      value={inputState.email}
                      label='Email Address'
                      onChange={handleTxtChange}
                      fullWidth
                      variant='outlined'
                      required
                      type='email'
                      placeholder='The thing with the @ in it’'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name='message'
                      multiline
                      rows={5}
                      variant='outlined'
                      value={inputState.message}
                      label='Your Message'
                      onChange={handleTxtChange}
                      fullWidth
                      required
                      placeholder='write your message'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
            {/* <Box width='100%'>
            <div className={classes.contactInfo}></div>
          </Box> */}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </Root>
  );
};

export default ContactUs;
