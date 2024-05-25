import client from './client';
import {ShopVersion} from '@Types/CommonTypes';

export async function getShopVersion(): Promise<ShopVersion> {
  const res = await client.post('shopversion.php', {});
  return res.data;
}
