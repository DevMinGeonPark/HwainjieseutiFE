import client from '../client';
import {deleteParamProps} from '@Types/EventDataTypes';

export async function deleteComment(params: deleteParamProps) {
  const res = await client.post('event_del.php', params);
  return res.data;
}
