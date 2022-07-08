import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step4 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Experience'
        description={`This has to do with your  knowledge of the end to end of a process, business or organisation.You gain experience in your workplace, relationships or life situations that you have found yourself overtime.`}
        multiple
        options={[
          'arts',
          'accountancy',
          'advertising',
          'agriculture',
          'transport',
          'automobile',
          'banking and finance',
          'building and construction',
          'beverage and liquor',
          'dealerships',
          'manufacturing',
          'civil service',
          'Religion/faith',
          'defense/military',
          'medicals/health',
          'electrical/electronics',
          'food',
          'digital',
          'technological',
          'law',
          'Pharmaceutical',
          'retail',
          'education',
          'sport',
          'telecom',
          'circular',
          'music',
          'energy/power',
          'sciences',
          'hospitality',
          'logistics',
          'human resource',
          'apparel /fashion',
          'startups',
          'Product development',
        ]}
      />
    </Container>
  );
};

export default Step4;
