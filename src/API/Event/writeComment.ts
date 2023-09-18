import client from '../client';
import {WriteParamProps} from '@Types/EventDataTypes';

export async function writeComment(params: WriteParamProps) {
  console.log(JSON.stringify(params, null, 2));
  const res = await client.post('event_write.php', params);
  return res.data;
}
