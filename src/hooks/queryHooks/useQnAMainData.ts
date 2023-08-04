import {useQuery} from 'react-query';
import useLog from '../useLog';
import {ParamProps, QnAMainData} from '@src/Types/QnAMainTypes';
import {getQnAMain} from '@src/API/QnAMain/getQnAMain';

export default function useQnAMainData(params: ParamProps) {
  const log = useLog('dev');

  const query = useQuery(['getQnAMainData', params], () => getQnAMain(params), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: QnAMainData) => {
      log.info(`불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`불러오기 실패`);
    },
  });
  return query;
}
