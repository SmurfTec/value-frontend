import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
  return (
    <Box mt={5}>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        HUHU : Help Us Help You
      </Typography>
      <Typography
        variant='subtitle2'
        style={{ textAlign: 'center', marginTop: '1rem' }}
      >
        PLEASE DROP ANY QUESTION ON THINGS THAT MATTER TO YOU
      </Typography>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <Box
          style={{
            height: 450,
            width: 700,
            position: 'relative',
          }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              columnGap: 30,
            }}
            mb={5}
          >
            <TextField
              variant='outlined'
              id='outlined-basic'
              label='NAME'
              style={{ width: '100%' }}
            />
            <TextField
              variant='outlined'
              id='outlined-basic'
              label='SUBJECT'
              style={{ width: '100%' }}
            />
          </Box>
          <TextField
            variant='outlined'
            id='outlined-basic'
            label='MESSAGE'
            multiline
            rows={6}
            style={{ width: '100%' }}
          />
          <Button
            variant='contained'
            color='primary'
            style={{
              position: 'absolute',
              right: 10,
              bottom: 50,
              width: '7rem',
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
