import axios from 'axios';

export const developmentURL = 'http://localhost:5000/api';
export const developmentOrigin = 'http://localhost:5000';

export const productionURL = 'https://valuecolonyapi.herokuapp.com/api';
export const productionOrigin = 'https://valuecolonyapi.herokuapp.com';

// export const URL = developmentURL;
// export const Origin = developmentOrigin;

export const URL = productionURL;
export const Origin = productionOrigin;

export const baseURL =
  process.env.NODE_ENV === 'production' ? productionURL : URL;
export const baseOrigin =
  process.env.NODE_ENV === 'production' ? productionOrigin : Origin;

export const TOKEN_KEY = 'Value-Colony-Token';

const responseCallback = (res) => {
  if (res.status === 200) return res;
  return Promise.reject(
    res.response?.data.message || res.message || 'Something Went Wrong'
  );
};

export const getSECURE_API = () => {
  const SECURE_API = axios.create({ baseURL });

  SECURE_API.interceptors.response.use((req) => req, responseCallback);
  // To help our auth middleware
  SECURE_API.interceptors.request.use((req) => {
    // console.log('token', token);
    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  return SECURE_API;
};

export const sendFormDataRequest = (url, method = 'POST', data, file = '') => {
  console.log('data', data);
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
    formData.append(key, value);
  }

  if (!data[file]) formData.delete(file);

  return fetch(`${baseURL}${url}`, {
    body: formData,
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
    },
  }).then(async (res) => {
    if (res.ok) {
      return await res.json();
    } else {
      return Promise.reject(await res.json());
    }
    // callBack?.();
  });
};

export const API = axios.create({ baseURL });
API.interceptors.response.use((req) => req, responseCallback);
