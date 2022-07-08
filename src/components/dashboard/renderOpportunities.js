import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Typography,
} from '@mui/material';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

const RenderOpportunities = ({
  loading,
  opportunities,
  watchlist,
}) => {
  return (
    <Scrollbars
      height={watchlist ? 600 : 440}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
    >
      {loading
        ? Array(5)
            .fill()
            .map((el, idx) => (
              <Box
                key={idx}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}
              >
                <Box flexBasis='50%' flexGrow={1}>
                  <Skeleton sx={{ width: 100, height: 70 }} />
                  <Box
                    display='flex'
                    flexDirection='column'
                    rowGap='5px'
                  >
                    <Typography variant='body1' fontWeight='bold'>
                      <Skeleton />
                    </Typography>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      maxWidth='200px'
                    >
                      <Typography variant='body2'>
                        {' '}
                        <Skeleton />
                      </Typography>
                      <Typography variant='body2'>
                        {' '}
                        <Skeleton />
                      </Typography>
                    </Box>
                    <Typography variant='body2'>
                      <Skeleton />
                    </Typography>
                  </Box>
                </Box>
                <Box display='flex' flexWrap='wrap' gap={1}>
                  <Button
                    size='small'
                    variant='contained'
                    color='error'
                  >
                    <Skeleton />
                  </Button>
                  <Button
                    size='small'
                    variant='contained'
                    sx={{ color: '#fff' }}
                    color='success'
                  >
                    <Skeleton />
                  </Button>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                  >
                    <Skeleton />
                  </Button>
                </Box>
              </Box>
            ))
        : opportunities.map((el) => (
            <>
              <Box
                key={el._id}
                sx={{
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '20px',
                  borderRadius: '15px',
                  margin: '5px 10px 5px',
                  padding: '10px',
                  mb: 2,
                }}
              >
                <Box flexBasis='50%' flexGrow={1}>
                  <Avatar
                    src={el.image}
                    alt='img'
                    sx={{
                      width: '60px',
                      height: '60px',
                      float: 'left',
                      marginRight: '1rem',
                      marginTop: '1.5rem',
                    }}
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    rowGap='5px'
                  >
                    <Typography variant='body1' fontWeight='bold'>
                      {el.title}
                    </Typography>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      maxWidth='200px'
                    >
                      <Typography variant='body2'>
                        {el.company}
                      </Typography>
                      <Typography variant='body2'>
                        {el.location}
                      </Typography>
                    </Box>
                    <Typography variant='body2' textAlign='left'>
                      {el.description}
                    </Typography>
                  </Box>
                </Box>
                <Box display='flex' flexWrap='wrap' gap={1}>
                  {!watchlist && (
                    <>
                      <Button
                        size='small'
                        variant='contained'
                        color='error'
                      >
                        Create
                      </Button>
                      <Button
                        size='small'
                        variant='contained'
                        sx={{ color: '#fff' }}
                        color='success'
                      >
                        Add To Watchlist
                      </Button>
                    </>
                  )}
                  <Button
                    size='small'
                    variant='contained'
                    style={{
                      backgroundColor: '#0000d4',
                      width: '4rem',
                      marginRight: '1rem',
                    }}
                  >
                    More
                  </Button>
                </Box>
              </Box>
            </>
          ))}
      <Box minHeight={watchlist ? '60px' : '50px'} />
    </Scrollbars>
  );
};

export default RenderOpportunities;
