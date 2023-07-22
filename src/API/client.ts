import axios from 'axios';
import {BASE_URL} from '@env';
import {getKTShopKey} from '@src/Utils/KTShopKey';

const client = axios.create({
  baseURL: BASE_URL,
});

client.defaults.headers.common['Content-Type'] = 'application/json';
client.defaults.headers.common['KTShopKey'] = getKTShopKey();

export default client;
