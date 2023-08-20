import {useQuery} from 'react-query';
import useLog from '../useLog';
import {getItemInfo} from '@src/API/Detail/getItemInfo';
import {ParamProps, SearchData} from '@Types/SearchDataType';
import {getSearchData} from '@src/API/SearchResult/getSearchData';

export default function useSearchData(params: ParamProps) {
  const log = useLog('data');

  const query = useQuery(
    ['getSearchData', params],
    () => getSearchData(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: SearchData) => {
        log.info(`Search 데이터 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.error(`Search 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
