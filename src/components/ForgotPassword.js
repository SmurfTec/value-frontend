import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { forgotPassword } from 'api/users';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      forgotPassword(values)
        .then((res) => {
          console.log('res', res);
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error(err);
        })
        .finally(() => {
          formik.resetForm();
        });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type='email'
            label='Email address'
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
        </Stack>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ my: 2 }}
        >
          <Link component={RouterLink} variant='subtitle2' to='/login'>
            Login
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size='large'
          type='submit'
          variant='contained'
          loading={isSubmitting}
        >
          Send Reset Link
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
