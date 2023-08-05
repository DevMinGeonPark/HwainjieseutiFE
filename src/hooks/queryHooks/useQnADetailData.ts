import {useQuery} from 'react-query';
import useLog from '../useLog';
import {ParamProps, QnADetailData} from '@src/Types/QnADetailTypes';
import {getQnADetailData} from '@src/API/QnADetail/getQnADetailData';

export default function useQnADetailData(params: ParamProps) {
  const log = useLog('dev');

  const query = useQuery(
    ['getQnADetailData', params],
    () => getQnADetailData(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: QnADetailData) => {
        log.info(`불러오기 성공`);
        return data;
      },
      onError: error => {
        log.info(`불러오기 실패`);
      },
    },
  );
  return query;
}
