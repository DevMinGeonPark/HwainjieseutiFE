import axios from 'axios';
import {BASE_URL} from '@env';

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
