import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import Page from 'components/common/Page';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik, Form } from 'formik';
import { FormikTextField } from 'components/formik';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateMe } from 'store/slices/auth/extraReducers';

const Profile = () => {
  const { user } = useSelector((at) => at.auth);

  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().required('Name is required!'),
    username: yup.string().required('Username is required!'),
    email: yup.string().email().required('Email is required!'),
    avatar: yup.string().required('Avatar is required!'),
    password: yup.string().required('Password is required!'),
    passwordConfirm: yup.string().required('PasswordConfirm is required!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      avatar: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(`values`, values);

      dispatch(
        updateMe({
          name: values.name,
          username: values.username,
          email: values.email,
        })
      );
    },
  });

  const navigate = useNavigate();

  const hanldeMoreRegistration = () => {
    navigate('/complete-registration');
  };

  const { errors, values } = useFormik;

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  }, [user]);

  useEffect(() => {
    console.log('values', values);
    console.log('errors', errors);
  }, [values]);

  return (
    <Page title='title'>
      <Typography variant='h5' sx={{ mb: 1 }}>
        Profile
      </Typography>
      <Divider />

      <Box>
        <CardContent>
          <Typography variant='h6'>Bio</Typography>
          <Box
            display='flex'
            flexDirection='column'
            gap={'20px'}
            maxWidth={'400px'}
            my={2}
          >
            <FormikTextField
              name='name'
              id='name'
              label='Name'
              formik={formik}
              fullWidth
              size='small'
            />
            <FormikTextField
              name='username'
              id='username'
              label='Username'
              formik={formik}
              fullWidth
              size='small'
            />
            <FormikTextField
              name='email'
              id='email'
              label='Email'
              formik={formik}
              fullWidth
              size='small'
            />
            <FormikTextField
              name='password'
              id='password'
              label='Password'
              formik={formik}
              fullWidth
              size='small'
            />
            <FormikTextField
              name='passwordConfirm'
              id='passwordConfirm'
              label='PasswordConfirm'
              formik={formik}
              fullWidth
              size='small'
            />
          </Box>
          <Button
            variant='contained'
            color='primary'
            sx={{
              marginRight: 5,
              mb: 1,
            }}
          >
            Save
          </Button>
          <Button variant='contained' color='primary' sx={{ mb: 1 }}>
            Change Password
          </Button>
          <Divider />
          <Typography sx={{ mt: 5 }} variant='subtitle2'>
            Self Attribute
            <Button
              variant='outlined'
              size='small'
              sx={{ marginLeft: 2 }}
              onClick={hanldeMoreRegistration}
              startIcon={<Edit fontSize='small' color='primary' />}
            >
              Update
            </Button>
          </Typography>
          <Box
            my={2}
            display='flex'
            flexWrap='wrap'
            justifyContent='space-between'
            alignItems='center'
            gap={5}
            mb={3}
          >
            {' '}
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.uniqueTalent.join(',')}
              label='UniqueTalent'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.interest.join(',')}
              label='Interest'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.skills.join(',')}
              label='Skills'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.experience.join(',')}
              label='Experience'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.networkReach.join(',')}
              label='NetworkReach'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.personalityType}
              label='PersonalityType'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.intelligenceType}
              label='IntelligenceType'
            />
            <TextField
              style={{ flexBasis: '40%', flexGrow: 1 }}
              value={user.thinkingProblem}
              label='ThinkingProblem'
            />
          </Box>{' '}
          <Box mt={8}>
            <Divider />
            <Typography variant='h5'> Deactivate Account</Typography>
            <Button variant='contained' color='primary' sx={{ mt: 1 }}>
              Deactivate Account
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Page>
  );
};

export default Profile;
