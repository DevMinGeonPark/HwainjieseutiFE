import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';

export async function getSubData(data: any) {
  const res = await client.post('subpage.php', data);

  return res.data;
}
