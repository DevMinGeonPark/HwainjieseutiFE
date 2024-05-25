import client from '../client';
import {EventClassListProps} from '@Types/EventDataTypes';

export async function getEventClasslist(params: EventClassListProps) {
  const res = await client.post('event_classlist.php', params);
  return res.data;
}
