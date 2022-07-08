import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Avatar,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AccountCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import handleImageUpload from 'helpers/handleImageUpload';
import { signUp } from 'store/slices/auth/extraReducers';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState('');

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('FullName required'),
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      image,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      // if (!image) {
      //   toast.error('Image is Required');
      //   formik.setSubmitting(false);
      //   return;
      // }
      dispatch(signUp({ ...values })).then(({ err }) => {
        formik.setSubmitting(false);
        if (!err) {
          formik.resetForm();
          setImage('');
        }
      });
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete='off'
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <Stack spacing={3}>
          <Box sx={{ textAlign: 'center' }}>
            <input
              style={{ display: 'none' }}
              type='file'
              onChange={(e) => {
                formik.setFieldValue('image', e.target.files[0]);
                handleImageUpload(e, null, (img) => {
                  setImage(img);
                });
              }}
              id='image'
            />
            <label htmlFor='image'>
              {image ? (
                <Avatar
                  src={image}
                  sx={{ width: 100, height: 100, margin: 'auto' }}
                />
              ) : (
                <Avatar
                  sx={{ width: 50, height: 50, margin: 'auto' }}
                >
                  <AccountCircle sx={{ fontSize: 40 }} />
                </Avatar>
              )}
            </label>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label='FullName'
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label='Username'
              {...getFieldProps('username')}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
            />
          </Stack>

          <TextField
            fullWidth
            type='email'
            label='Email address'
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            label='Password'
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={showPassword ? eyeFill : eyeOffFill}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            fullWidth
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            label='Password Confirm'
            {...getFieldProps('passwordConfirm')}
            error={Boolean(
              touched.passwordConfirm && errors.passwordConfirm
            )}
            helperText={
              touched.passwordConfirm && errors.passwordConfirm
            }
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
