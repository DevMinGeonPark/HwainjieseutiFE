import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {EventData, Body} from '@Types/EventDataTypes';
import {getEventData} from '@src/API/Event/getEventData';

export default function useEventData(params: Body) {
  const log = useLog('dev');

  const query = useQuery(['getEventData', params], () => getEventData(params), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: EventData) => {
      log.info(`Event 데이터 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`Event 데이터 불러오기 실패`);
      log.info(error);
    },
  });
  return query;
}
