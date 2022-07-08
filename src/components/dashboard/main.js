import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
  Paper,
  Avatar,
  ListItemAvatar,
} from '@mui/material';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Comment, Share } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import RenderOpportunities from './renderOpportunities';
import { styled } from '@mui/material/styles';
import youtube from 'assets/youtube.png';
import leaf from 'assets/two.jpg';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Scrollbars from 'react-custom-scrollbars';
import ReactPlayer from 'react-player';

const timelines = [
  {
    _id: 1,
    task: 'Create Wireframe',
    status: 'pending',
    comments: [],
    shares: [],
  },
  {
    _id: 2,
    task: 'Slack Logo Design',
    status: 'pending',
    comments: [1, 2, 3],
    shares: [2, 4, 1, 2, 3],
  },
  {
    _id: 3,
    task: 'Dashboard Design',
    status: 'pending',
    comments: [],
    shares: [2, 3, 1, 3, 1],
  },
  {
    _id: 4,
    task: 'Create Wireframe',
    status: 'completed',
    comments: [],
    shares: [],
  },
  {
    _id: 5,
    task: 'Create Wireframe',
    status: 'completed',
    comments: [],
    shares: [],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Main = () => {
  const { opportunities, loading } = useSelector((st) => st.opportunities);

  console.log('opportunities', opportunities);

  const community = [1, 2, 3, 4];

  return (
    <Container style={{ padding: '0rem 0.3rem 0rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Item
            sx={{
              // border: '1px solid #ccc',
              p: 2,
              borderRadius: '20px',
              height: '400px',
              overflow: 'hidden',
            }}
          >
            <Typography variant='h5' style={{ marginBottom: '5px' }}>
              {' '}
              OPPORTUNITIES
            </Typography>
            <RenderOpportunities
              opportunities={opportunities}
              loading={loading}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item
            sx={{
              p: 2,
              borderRadius: '20px',
              height: '350px',
              overflowY: 'auto',
            }}
          >
            <Typography variant='h5'>TIMELINES YOU SET</Typography>
            <List>
              {timelines.map((el, idx) => (
                <ListItem
                  key={el._id}
                  secondaryAction={
                    <IconButton edge='end' aria-label='comments'>
                      {el.status === 'pending' ? (
                        <CheckCircleOutlineIcon />
                      ) : (
                        <CheckCircleIcon color='success' />
                      )}
                    </IconButton>
                  }
                >
                  <Typography variant='body1' sx={{ marginRight: 4 }}>
                    {idx < 10 && 0}
                    {idx}
                  </Typography>
                  <ListItemText primary={el.task} />
                  {el.comments.length > 0 && (
                    <Box
                      sx={{
                        marginLeft: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Typography variant='body1'>
                        {el.comments.length}
                      </Typography>
                      <Comment fontSize='small' />
                    </Box>
                  )}
                  {el.shares.length > 0 && (
                    <Box
                      sx={{
                        marginLeft: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Typography variant='body1'>
                        {el.shares.length}
                      </Typography>
                      <Share fontSize='small' />
                    </Box>
                  )}
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ marginTop: '1rem' }}>
          <Grid item xs={4}>
            <Item
              sx={{
                p: 2,
                borderRadius: '20px',
                height: '300px',
                // overflowY: 'auto',
              }}
            >
              <Typography variant='h5'>SET OUT TO TRY</Typography>

              <List
                component={Scrollbars}
                height={300}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                sx={{
                  width: '100%',
                  maxWidth: 360,
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Typography variant='h2'>1</Typography>
                  </ListItemAvatar>
                  <ListItemText primary='Photos' secondary='Jan 9, 2014' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Typography variant='h2'>2</Typography>
                  </ListItemAvatar>
                  <ListItemText primary='Work' secondary='Jan 7, 2014' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Typography variant='h2'>3</Typography>
                  </ListItemAvatar>
                  <ListItemText primary='Vacation' secondary='July 20, 2014' />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                p: 2,
                borderRadius: '20px',
                height: '300px',
                overflowY: 'auto',
              }}
            >
              <Typography variant='h5'>COMMUNITY FEED</Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Photos' secondary='Jan 9, 2014' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Work' secondary='Jan 7, 2014' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Vacation' secondary='July 20, 2014' />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                p: 2,
                borderRadius: '20px',
                height: '300px',
                overflowY: 'auto',
              }}
            >
              <Typography variant='h5'>PORTFOLIO BUILDER</Typography>
              <ReactPlayer
                url={'https://imgur.com/smI4YAI.mp4'}
                controls
                height={230}
                width={335}
              />
              {/* <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                mt={2}
              >
                <img
                  src={youtube}
                  alt='img'
                  style={{
                    width: 250,
                    height: 200,
                  }}
                />
              </Box> */}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
