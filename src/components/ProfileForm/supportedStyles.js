import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#ccc',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export const RootBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [`& .MuiStepIcon-root`]: {
    color: theme.palette.grey[300],
    [`& .MuiStepIcon-text`]: {
      fill: 'darkgrey',
      fontWeight: 600,
    },
    [`&.Mui-active`]: {
      color: theme.palette.primary.light,
      [`& .MuiStepIcon-text`]: {
        fill: '#fff',
        fontWeight: 600,
      },
    },
  },
  [`& .MuiStepLabel-labelContainer`]: {
    display: 'none',
  },
}));
