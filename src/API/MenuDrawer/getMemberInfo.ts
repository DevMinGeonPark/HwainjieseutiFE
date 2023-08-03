import client from '../client';
import {ParamProps} from '@Types/MemberInfoTypes';

export async function getMemberInfo(params: ParamProps) {
  const res = await client.post('memberinfo.php', params);
  return res.data;
}
