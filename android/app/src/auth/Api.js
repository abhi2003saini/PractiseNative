import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/auth/login';

export const loginApi = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data;
};

export const signupApi = async (name, email, password) => {
  const response = await axios.post(`${BASE_URL}/signup`, { name, email, password });
  return response.data;
};
