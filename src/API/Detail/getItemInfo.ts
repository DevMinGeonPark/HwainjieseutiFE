import client from '../client';
import {ItemDetail, ParamProps} from '@src/Types/DetailTypes';

export async function getItemInfo(data: ParamProps) {
  const res = await client.post('iteminfo.php', data);
  return res.data;
}
