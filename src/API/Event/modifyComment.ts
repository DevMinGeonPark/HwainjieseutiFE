import client from '../client';
import {modifyParamProps} from '@Types/EventDataTypes';

export async function modifyComment(params: modifyParamProps) {
  const res = await client.post('event_modify.php', params);
  return res.data;
}
