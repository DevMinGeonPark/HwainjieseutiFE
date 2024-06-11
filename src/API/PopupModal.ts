import {GongContent} from '@src/Utils/processGongContent';
import client from './client';
import {processGongContent} from '@src/Utils/processGongContent';

export async function popupModal(): Promise<GongContent[]> {
  const res = await client.post('pushgonggi.php', {});

  return processGongContent(res.data);
}
