import client from './client';
import {ParamProps} from '@Types/axiosTypes';
export async function ConfirmPassword(params: ParamProps) {
  const res = await client.post('pwconfirm.php', params);
  return res.data;
}
