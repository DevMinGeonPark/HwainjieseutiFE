import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';

export async function getMainData() {
  // const res = await client.get('main.php');
  const data = {};
  const headers = {
    'Content-Type': 'application/json',
    KTShopKey: getKTShopKey(),
  };
  const res = await client.post('main.php', data, {headers: headers});
  console.log(getKTShopKey());
  return res.data;
}
