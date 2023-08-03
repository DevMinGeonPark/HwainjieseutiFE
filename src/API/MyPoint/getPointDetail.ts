import client from '../client';
import {ParamProps} from '@Types/PointDetailTypes';

export async function getPointDetail(params: ParamProps) {
  const res = await client.post('pointdetail.php', params);
  return res.data;
}
