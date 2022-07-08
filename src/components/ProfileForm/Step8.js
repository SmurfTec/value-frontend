import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step8 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Thinking Pattern'
        description={`How do you see and process information`}
        options={[
          'EXPLORER:thinking is about generating creative ideas',
          'EXPERT: thinking is about achieving objectivity and insight',
          'PLANNER:thinking is about designing effective systems',
          'OPTIMIZER:thinking is about improving productivity and efficiency',
          'ENERGIZER:thinking is about mobilizing people into action',
          'PRODUCER:thinking is about achieving completion and momentum',
          'CONNECTOR:thinking is about building and strengthening relationships',
          'COACH:thinking is about cultivating people and potential',
        ]}
        handleSubmit={props.handleSubmit}
      />
    </Container>
  );
};

export default Step8;
