import axios from 'axios';
import { baseURL } from '../utils/constants';

axios.defaults.baseURL = baseURL;

export const getUsers = (page = 1) =>
  axios
    .get(`/users?page=${page}&count=6`)
    .then(({ data }) => ({
      total_pages: data.total_pages,
      users: data.users,
      page: data.page,
    }))
    .catch(console.error);

export const postUser = async formData => {
  const { data } = await axios.get('/token');
  const config = {
    headers: { Token: data.token },
  };

  axios.post('/users', formData, config).catch(console.error);
};
