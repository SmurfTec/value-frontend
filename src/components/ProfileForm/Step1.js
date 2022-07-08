import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step1 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Unique Talent'
        description='What are the unique talents you have, either based on you noticed in yourself or others have noticed in you ?  '
        multiple
        options={[
          'Art',
          'Creativity',
          'Decision making',
          'Design thinking',
          'Knowledge',
          'Personal presence',
          'Problem solving',
          'Public speaking',
          'Self management',
          'Strategic thinking',
          'Visual design',
          'Confidence',
          'Credibility',
          'Design',
          'Influencing',
          'Leadership',
          'Personal resilience',
          'Professionalism',
          'Self direction',
          'Story telling',
        ]}
      />
    </Container>
  );
};

export default Step1;
