import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';

export async function getMainData() {
  // const res = await client.get('main.php');
  const data = {};

  const res = await client.post('main.php', {});

  return res.data;
}
