import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';

export async function getMenuData() {
  // const res = await client.get('main.php');
  const data = {};

  const res = await client.post('menu.php', data);
  return res.data;
}
