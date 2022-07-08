import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loading } from 'components';
import { useSelector } from 'react-redux';
import Logout from 'components/Logout';
import Community from 'pages/Community';
const DashboardLayout = lazy(() => import('components/dashboard'));
const Main = lazy(() => import('components/dashboard/main'));
const WatchList = lazy(() => import('components/dashboard/watchlist'));
const Pricing = lazy(() => import('pages/Pricing'));
const ContactUs = lazy(() => import('pages/ContactUs'));

const HomePage = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const ForgotPassword = lazy(() => import('pages/ForgotPassword'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const ConfirmMail = lazy(() => import('pages/ConfirmMail'));
const Register = lazy(() => import('pages/Register'));
const MoreRegistration = lazy(() => import('pages/MoreRegistration'));
const Profile = lazy(() => import('pages/Profile'));
const Nodes = lazy(() => import('pages/Nodes'));
const Ambassadors = lazy(() => import('pages/Ambassadors'));
const Contact = lazy(() => import('pages/Contact'));
const Portfolio = lazy(() => import('pages/Portfolio'));

const Router = () => {
  const { isLoggedIn, authenticating, user } = useSelector((st) => st.auth);

  if (authenticating) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        {isLoggedIn ? (
          <Route>
            {/* <Route path='/' element={<HomePage />} /> */}
            {user.thinkingProblem ? (
              <Route>
                <Route
                  path='/complete-registration'
                  element={<MoreRegistration />}
                />
                <Route path='/dashboard' element={<DashboardLayout />}>
                  <Route path='app' element={<Main />} />
                  <Route path='watchlist' element={<WatchList />} />
                  <Route path='portfolio' element={<Portfolio />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='nodes' element={<Nodes />} />
                  <Route path='community' element={<Community />} />
                  <Route path='ambassadors' element={<Ambassadors />} />
                  <Route path='contact' element={<Contact />} />
                </Route>
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<Navigate to='/dashboard/app' />} />
              </Route>
            ) : (
              <Route>
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<MoreRegistration />} />
              </Route>
            )}
          </Route>
        ) : (
          <Route>
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<ResetPassword />} />
            <Route path='/confirmMail/:token' element={<ConfirmMail />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
};

export default Router;
