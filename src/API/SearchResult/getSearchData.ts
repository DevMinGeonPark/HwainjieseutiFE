import client from '../client';
import {ParamProps} from '@Types/SearchDataType';

export async function getSearchData(params: ParamProps) {
  const res = await client.post('search.php', params);
  return res.data;
}
