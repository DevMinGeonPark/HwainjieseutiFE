import client from '../client';
import {ParamProps} from '@src/Types/WriteQnATypes';
export async function WriteQnA(params: ParamProps) {
  const response = await client.post('qna_write.php', params);
  return response.data;
}
