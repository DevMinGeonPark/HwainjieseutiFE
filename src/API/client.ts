import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '@env';
import {getKTShopKey} from '@src/Utils/KTShopKey';

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Set initial common headers
client.defaults.headers.common['Content-Type'] = 'application/json';
client.defaults.headers.common['KTShopKey'] = getKTShopKey();
// console.log(getKTShopKey());

// Update KTShopKey value every 10 seconds
const updateKTShopKey = () => {
  client.defaults.headers.common['KTShopKey'] = getKTShopKey();
};
setInterval(updateKTShopKey, 30000);

export default client;
