import {EventClass} from '@src/Types/EventDataTypes';
import client from '../client';

export async function getEventClass(): Promise<EventClass[]> {
  const res = await client.post('event_class.php', {});
  return res.data;
}
