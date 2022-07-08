import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step7 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Your intelligence Type'
        description={`Which one these showcase you dominant sense of things`}
        options={[
          'LOGICAL:recognising relationships,patterns and trends',
          'SPATIAL:visualising image',
          `NATURALISTIC:distinguishing between nature's features,surviva'l instinct`,
          'MUSICAL:recognising tone,rhythm,pitch,timbre',
          'KINESTHETIC:coordinating your mind with your body',
          'LINGUISTIC:expressing through language,verbal and written',
          'INTRA-PERSONAL:expressing through language,verbal and written',
          'INTERPERSONAL:intuitive,excellent communication,empathy',
        ]}
      />
    </Container>
  );
};

export default Step7;
