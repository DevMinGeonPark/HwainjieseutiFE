import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {MainData} from '@Types/MainDataTypes';

export default function useMainData() {
  const log = useLog('data');

  const query = useQuery<MainData>('getMainData', getMainData, {
    onSuccess: data => {
      log.info(`메인 데이터 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.error(`메인 데이터 불러오기 실패 ${error}`);
    },
    staleTime: 60 * 1000, // 1분
    cacheTime: 5 * 60 * 1000, // 5분
  });

  return query;
}
