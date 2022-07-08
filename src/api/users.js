import {
  getSECURE_API,
  API,
  baseURL,
  TOKEN_KEY,
  sendFormDataRequest,
} from 'api';
import axios from 'axios';

const SECURE_API = getSECURE_API();
SECURE_API.interceptors.request.use((req) => {
  req.baseURL = `${req.baseURL}/users`;
  return req;
});

// API.interceptors.request.use((req) => {
//   req.baseURL = `${req.baseURL}/users`;
//   return req;
// });

export const getAll = () => SECURE_API.get('/');
export const getMe = () => SECURE_API.get('/me');
export const getMyBookings = () => SECURE_API.get('/bookings');

export const updateMe = (profile, dontUseFormData = false) =>
  dontUseFormData
    ? SECURE_API.patch('/users/me', profile)
    : sendFormDataRequest('/users/me', 'PATCH', profile, 'image');

export const updatePassword = (body) =>
  axios.patch(
    `${baseURL}/auth/update-password`,
    {
      ...body,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    }
  );
export const updateOne = ({ id, updatedUser }) =>
  SECURE_API.patch(`/${id}`, {
    ...updatedUser,
  });
export const deleteOne = (id) => SECURE_API.delete(`/${id}`);

export const logIn = (values) => API.post('/auth/login', values);
export const signUp = (values) =>
  sendFormDataRequest('/auth/signup', 'POST', values, 'image');

export const forgotPassword = (values) =>
  API.post('/auth/forgotPassword', values);

export const resetPassword = (token, values) =>
  API.patch(`/auth/resetPassword/${token}`, values);

export const confirmMail = (token) => API.get(`/auth/confirmMail/${token}`);
