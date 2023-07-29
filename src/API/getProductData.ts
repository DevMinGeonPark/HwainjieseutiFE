import client from './client';
import {SubPageBaseProps} from '@src/Types/ProductTypes';

export async function getProductData(data: SubPageBaseProps) {
  const res = await client.post('subpage.php', data);
  return res.data;
}
