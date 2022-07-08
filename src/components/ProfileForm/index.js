import React, { useEffect } from 'react';
import { useStep } from 'react-hooks-helper';
import * as yup from 'yup';
import { useFormik, Form } from 'formik';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import { Container } from '@mui/material';
import { updateAttributes, updateMe } from 'store/slices/auth/extraReducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 0, Component: Step1, name: 'uniqueTalent' },
  { id: 1, Component: Step2, name: 'interest' },
  { id: 2, Component: Step3, name: 'skills' },
  { id: 3, Component: Step4, name: 'experience' },
  { id: 4, Component: Step5, name: 'networkReach' },
  { id: 5, Component: Step6, name: 'personalityType' },
  { id: 6, Component: Step7, name: 'intelligenceType' },
  { id: 7, Component: Step8, name: 'thinkingProblem' },
];

const Index = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { Component, id, name } = step;
  const { user } = useSelector((st) => st.auth);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    uniqueTalent: yup.array().required('UniqueTalent is required!'),
    interest: yup.array().required('Interest is required!'),
    skills: yup.array().required('Skills is required!'),
    experience: yup.array().required('Experience is required!'),
    networkReach: yup.array().required('NetworkReach is required!'),
    personalityType: yup.string().required('PersonalityType is required!'),
    intelligenceType: yup.string().required('IntelligenceType is required!'),
    thinkingProblem: yup.string().required('ThinkingProblem is required!'),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      uniqueTalent: [],
      interest: [],
      skills: [],
      experience: [],
      networkReach: [],
      personalityType: '',
      intelligenceType: '',
      thinkingProblem: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(`values`, values);

      dispatch(
        updateAttributes({
          uniqueTalent: values.uniqueTalent,
          interest: values.interest.map((el) => el.name),
          skills: values.skills.map((el) => el.name),
          experience: values.experience,
          networkReach: values.networkReach.map((el) => el.name),
          personalityType: values.personalityType,
          intelligenceType: values.intelligenceType,
          thinkingProblem: values.thinkingProblem,
        })
      ).then(({ err }) => {
        if (!err) navigate('/dashboard/profile');
      });
    },
  });

  const { handleSubmit, errors, values } = formik;

  useEffect(() => {
    formik.setValues({
      uniqueTalent: user.uniqueTalent,
      interest: user.interest,
      skills: user.skills,
      experience: user.experience,
      networkReach: user.networkReach,
      personalityType: user.personalityType,
      intelligenceType: user.intelligenceType,
      thinkingProblem: user.thinkingProblem,
    });
  }, [user]);

  useEffect(() => {
    console.log('values', values);
    console.log('errors', errors);
  }, [values]);

  const props = { navigation, formik, steps, id, name };

  return (
    <Container sx={{ mt: 5 }}>
      <Component {...props} handleSubmit={formik.handleSubmit} />
    </Container>
  );
};

export default Index;
