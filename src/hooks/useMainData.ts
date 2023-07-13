import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from './useLog';
import {MainData} from '@Types/MainDataTypes';

export default function useMainData() {
  const log = useLog('dev');

  // const mutation = useMutation(getMainData, {
  //   onSuccess: data => {
  //     log.info(`메인 데이터 불러오기 성공`);
  //     return data;
  //   },
  //   onError: Error => {
  //     log.info(`메인 데이터 불러오기 실패`);
  //   },
  // });

  const query = useQuery('getMainData', getMainData, {
    onSuccess: (data: MainData) => {
      log.info(`메인 데이터 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`메인 데이터 불러오기 실패`);
    },
  });
  // return mutation;
  return query;
}
