import jwt_decode from 'jwt-decode';
import { $authHost, $host } from './index';

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('modnikky/user/registration', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('modnikky/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('modnikky/user/auth');
   localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
