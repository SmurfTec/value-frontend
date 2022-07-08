import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Card,
  Stack,
  Link,
  Container,
  Typography,
  CircularProgress,
} from '@mui/material';
// layouts
import AuthLayout from 'layouts/AuthLayout';
// components
import Page from 'components/common/Page';
import { MHidden } from 'components/@material-extend';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { confirmMail } from 'api/users';
import { useDispatch } from 'react-redux';
import { loginDirect } from 'store/slices/auth';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ConfirmMail() {
  const [confirming, setConfirming] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isDone, setIsDone] = useState(false);

  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    setIsDone(true);
    if (isDone) return;
    console.log('useEffected');
  }, []);

  return (
    <RootStyle title='ConfirmMail | Valuecolony'>
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link
          underline='none'
          variant='subtitle2'
          component={RouterLink}
          to='/register'
        >
          Get started
        </Link>
      </AuthLayout>

      <MHidden width='mdDown'>
        <SectionStyle>
          <Typography variant='h3' sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src='/static/illustrations/illustration_login.png' alt='login' />
        </SectionStyle>
      </MHidden>

      <Container maxWidth='sm'>
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant='h4' gutterBottom>
              {confirming ? (
                <>
                  {'Confirming...'}
                  <CircularProgress size={25} />
                </>
              ) : success ? (
                message
              ) : (
                error
              )}
            </Typography>
          </Stack>

          <MHidden width='smUp'>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant='subtitle2' component={RouterLink} to='register'>
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
