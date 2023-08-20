import {useQuery} from 'react-query';
import useLog from '../useLog';
import {ParamProps, QnADetailData} from '@src/Types/QnADetailTypes';
import {getQnADetailData} from '@src/API/QnADetail/getQnADetailData';

export default function useQnADetailData(params: ParamProps) {
  const log = useLog('data');

  const query = useQuery(
    ['getQnADetailData', params],
    () => getQnADetailData(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: QnADetailData) => {
        log.info(`QnA Detail data 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.error(`불러오기 실패 ${error}`);
      },
    },
  );
  return query;
}
