import client from '../client';
import {ParamProps, QnAMainData} from '@Types/QnAMainTypes';

export async function getQnAMain(params: ParamProps) {
  const res = await client.post('qnalist.php', params);
  return res.data;
}

// WARN  [TypeError: data.map is not a function (it is undefined)]
