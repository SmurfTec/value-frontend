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
  req.baseURL = `${req.baseURL}/opportunities`;
  return req;
});

// API.interceptors.request.use((req) => {
//   req.baseURL = `${req.baseURL}/users`;
//   return req;
// });

export const getAll = () => SECURE_API.get('/');
// export const getMyOppoutunities = () => SECURE_API.get('/me');

// export const updateOne = ({ id, updatedUser }) =>
//   SECURE_API.patch(`/${id}`, {
//     ...updatedUser,
//   });
// export const deleteOne = (id) => SECURE_API.delete(`/${id}`);
