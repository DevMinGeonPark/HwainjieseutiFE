import client from '../client';
import {ItemDetail, ParamProps} from '@src/Types/DetailTypes';

export async function getItemInfo(data: ParamProps) {
  // 05.07 버전
  // const res = await client.post('iteminfo240507.php', data);
  const res = await client.post('iteminfo.php', data);
  return res.data;
}
