import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate, useParams } from 'react-router-dom';
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
import { resetPassword } from 'api/users';
import { loginDirect } from 'store/slices/auth';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const dispatch = useDispatch();
  const { token } = useParams();

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      resetPassword(token, values)
        .then((res) => {
          console.log('res', res);
          toast.success(res.data.message);
          dispatch(loginDirect({ user: res.data.user, token: res.data.token }));
        })
        .catch((err) => {
          console.log('err', err);
          toast.error(err);
        })
        .finally(() => {
          formik.resetForm();
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
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
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
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
            error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}
          >
            Reset Password
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
