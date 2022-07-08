import { Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  paddingInline: '1rem',
  paddingBlock: '3rem',

  '&:nth-of-type(even)': {
    backgroundColor: '#f5f6fa',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[0],
  },

  '& .sectionHead': {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    marginBottom: '2.5rem',

    '&:after': {
      content: "''",
      display: 'block',
      height: 3,
      width: 50,
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
      left: 0,
      right: 0,
      top: '100%',
      margin: '10px auto',
    },
  },
}));

const Section = (props) => {
  return (
    <Wrapper id={props.id}>
      <Container maxWidth='lg'>
        <Typography variant='h3' align='center' className='sectionHead'>
          {props.title}
        </Typography>
        {props.children}
      </Container>
    </Wrapper>
  );
};

export default Section;
