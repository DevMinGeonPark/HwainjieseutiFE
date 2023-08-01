import client from './client';
import {CommonSubPageProps} from '@src/Types/ProductTypes';

export async function getProductData(data: CommonSubPageProps) {
  const res = await client.post('subpage.php', data);
  return res.data;
}
