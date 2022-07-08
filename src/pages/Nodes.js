import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const Nodes = () => {
  return (
    <>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '4.5em',
          marginTop: '3rem',
        }}
      >
        <Box
          style={{
            p: 3,
            borderRadius: '20px',
            height: '275px',
            width: '370px',
            overflowY: 'auto',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            position: 'relative',
          }}
        >
          <Box p={3}>
            <Typography variant='h5'>CREATE</Typography>
            <Divider />
            <Typography variant='body1' style={{ marginTop: '1rem' }}>
              Create your ideas into a micro business then scale it
              overtime into a macro struccture
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{
                float: 'right',
                position: 'absolute',
                right: 10,
                bottom: 20,
              }}
            >
              EXPLORE
            </Button>
          </Box>
        </Box>
        <Box
          style={{
            p: 2,
            borderRadius: '20px',
            height: '275px',
            width: '370px',
            overflowY: 'auto',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            position: 'relative',
          }}
        >
          <Box p={3}>
            <Typography variant='h5'>CO-CREATE</Typography>
            <Divider />
            <Typography variant='body1' style={{ marginTop: '1rem' }}>
              co-create value with others by updating your skill set,
              regularly taking industry based exercises to improve
              experience and updating your resume
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{
                float: 'right',
                position: 'absolute',
                right: 10,
                bottom: 20,
              }}
            >
              EXPLORE
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '4.5em',
          marginTop: '3rem',
        }}
      >
        <Box
          style={{
            p: 2,
            borderRadius: '20px',
            height: '275px',
            width: '370px',
            overflowY: 'auto',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            position: 'relative',
          }}
        >
          <Box p={3}>
            <Typography variant='h5'>PROMOTE</Typography>
            <Divider />
            <Typography variant='body1' style={{ marginTop: '1rem' }}>
              Help drive products and services taht you are passionate
              about and you believe will make an impact to your circle
              of influence
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{
                float: 'right',
                position: 'absolute',
                right: 10,
                bottom: 20,
              }}
            >
              EXPLORE
            </Button>
          </Box>
        </Box>
        <Box
          style={{
            p: 2,
            borderRadius: '20px',
            height: '275px',
            width: '370px',
            overflowY: 'auto',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            position: 'relative',
          }}
        >
          <Box p={3}>
            <Typography variant='h5'>INVEST</Typography>
            <Divider />
            <Typography variant='body1' style={{ marginTop: '1rem' }}>
              Keep finding and invesing in porjects you can
              participate in and be produced of its growth. There by
              earning both in short and long term
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{
                float: 'right',
                position: 'absolute',
                right: 10,
                bottom: 20,
              }}
            >
              EXPLORE
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Nodes;
