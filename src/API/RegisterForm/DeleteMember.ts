import client from '../client';
import {DeleteParamProps} from '@src/Types/MemberTypes';
export async function DeleteMember(params: DeleteParamProps) {
  const res = await client.post('memberleave.php', params);
  return res.data;
}
