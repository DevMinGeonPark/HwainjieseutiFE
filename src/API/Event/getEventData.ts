import client from '../client';
import {Body} from '@Types/EventDataTypes';

export async function getEventData(params: Body) {
  const res = await client.post('event.php', params);
  return res.data;
}
