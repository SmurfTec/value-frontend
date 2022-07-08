import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import RenderOpportunities from './renderOpportunities';
import styled from '@emotion/styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  overflow: 'hidden',
}));

const WatchList = () => {
  const { opportunities, loading } = useSelector(
    (st) => st.opportunities
  );
  return (
    <Container
      sx={{
        p: 2.5,
      }}
    >
      <Item
        sx={{
          // border: '1px solid #ccc',
          p: 2,
          borderRadius: '20px',
          height: '75vh',
          }}
      >
        {/* <Typography variant='h5' style={{ marginBottom: '5px' }}>
          OPPORTUNITIES
        </Typography> */}
        <RenderOpportunities
          watchlist
          opportunities={opportunities}
          loading={loading}
        />
      </Item>
    </Container>
  );
};

export default WatchList;
