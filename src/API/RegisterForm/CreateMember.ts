import client from '../client';
import {ParamProps} from '@src/Types/MemberTypes';
export async function CreateMember(params: ParamProps) {
  const res = await client.post('memberreg.php', params);
  return res.data;
}
