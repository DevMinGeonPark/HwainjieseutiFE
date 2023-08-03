import client from './client';
import {ParamProps} from '@Types/ProductTypes';
import {CommonProps} from '@Types/CommonTypes';

export async function getProductData(params: ParamProps | CommonProps) {
  const res = await client.post('subpage.php', params);
  return res.data;
}
