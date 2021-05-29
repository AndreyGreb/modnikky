import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { toggleUserIsAuthAction } from '../store/User/actions';
import { $authHost, $host } from './index';

const fetchCategory = async () => {
  const { data } = await $host.get('modnikky/category/getAll');
  return data;
};

export default fetchCategory;
