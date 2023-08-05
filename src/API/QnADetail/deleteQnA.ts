import client from '../client';
import {ParamProps} from '@Types/QnADetailTypes';

export async function deleteQnA(params: ParamProps) {
  const res = await client.post('qna_del.php', params);
  return res.data;
}
