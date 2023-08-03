import client from '../client';
import {ParamProps, resultProps} from '@Types/PointSaveTypes';

export async function PointSave(params: ParamProps) {
  const res = await client.post('pointsave.php', params);
  return res.data as resultProps;
}
