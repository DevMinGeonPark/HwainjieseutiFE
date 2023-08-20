import {getProductData} from '@src/API/getProductData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {getSubData} from '@src/API/getSubData';

export default function useSubData(params: any) {
  const log = useLog('data');

  const query = useQuery('getProductData', () => getSubData(params), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: any) => {
      log.info(`Sub Data 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`Sub Data 불러오기 실패`);
    },
  });
  // return mutation;
  return query;
}
