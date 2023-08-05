import client from '../client';
import {ParamProps} from '@Types/QnADetailTypes';

export async function getQnADetailData(params: ParamProps) {
  const res = await client.post('qna_detail.php', params);
  return res.data;
}
