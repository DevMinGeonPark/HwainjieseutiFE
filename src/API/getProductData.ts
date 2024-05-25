import client from './client';
import {ParamProps} from '@Types/ProductTypes';
import {CommonProps} from '@Types/CommonTypes';

export async function getProductData(params: ParamProps | CommonProps) {
  const res = await client.post('subpage.php', params);
  // 애플 통과 후 변경
  // const res = await client.post('subpage240511.php', params);

  return res.data;
}
