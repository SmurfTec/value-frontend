import React, { useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { QontoConnector, RootBox } from './supportedStyles';
import { FormikAutoComplete } from 'components/formik';
import { useNavigate } from 'react-router-dom';

const StepForm = ({
  steps,
  formik,
  navigation,
  name,
  id,
  title,
  description,
  options,
  groupBy,
  multiple = false,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  const handlePrev = () => {
    if (id === 0) navigate('/');
    else navigation.previous();
  };

  const handleNext = () => {
    if (id < 7) navigation.next();
    else handleSubmit();
  };

  return (
    <RootBox>
      <Stepper
        sx={{ mb: 4 }}
        activeStep={id}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map(({ id: stepId }) => (
          <Step key={stepId}>
            <StepLabel
              StepIconProps={{
                completed: false,
                active: stepId <= id,
              }}
            >
              {stepId + 1}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        px={10}
        minHeight='55vh'
        borderRadius='40px'
        py={5}
        bgcolor='#eefdf4'
      >
        <Typography variant='h5' fontWeight={700} sx={{ mb: 3 }}>
          {title}
        </Typography>
        <Typography
          sx={{ mb: 2 }}
          fontWeight='normal'
          component='h5'
          variant='body1'
          color='#828a9e'
        >
          {description}
        </Typography>
        <FormikAutoComplete
          id={name}
          options={options}
          name={name}
          label=''
          formik={formik}
          groupBy={groupBy}
          multiple={multiple}
          fullWidth
          sx={(theme) => ({
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#917CC2 !important',
            },
          })}
        />
      </Box>
      <Box
        mt={3}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Button
          variant='outlined'
          sx={{
            color: 'primary.light',
            borderColor: 'primary.light',
            px: 4,
            py: 1,
            borderRadius: '25px',
          }}
          onClick={handlePrev}
        >
          Previous Step
        </Button>

        <Button
          variant='contained'
          sx={{
            backgroundColor: 'primary.light',
            color: '#fff',
            px: 4,
            py: 1,
            borderRadius: '25px',
          }}
          onClick={handleNext}
          disabled={
            multiple === true
              ? !formik.values[name].length
              : !formik.values[name]
          }
        >
          {id === 7 ? 'Submit' : ' Next Step'}
        </Button>
      </Box>
    </RootBox>
  );
};

export default StepForm;
