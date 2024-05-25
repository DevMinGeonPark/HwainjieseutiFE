import client from '../client';
import {EventClassNotice} from '@Types/EventDataTypes';

export async function getEventClassNotice(params: EventClassNotice) {
  const res = await client.post('event_classnotice.php', params);
  return res.data;
}
