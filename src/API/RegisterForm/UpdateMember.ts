import client from '../client';
import {ParamProps} from '@src/Types/MemberTypes';
export async function UpdateMember(params: ParamProps) {
  const res = await client.post('memberupdate.php', params);
  return res.data;
}
