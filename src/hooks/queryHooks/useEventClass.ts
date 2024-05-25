import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {EventClass} from '@Types/EventDataTypes';
import {getEventClass} from '@src/API/Event/getEventClass';

export default function useEventClass() {
  const log = useLog('data');

  const query = useQuery(['getEventClass'], () => getEventClass(), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: EventClass[]) => {
      log.info(`Event_Class 데이터 불러오기 성공 `);
      return data;
    },
    onError: error => {
      log.info(`Event_class 데이터 불러오기 실패`);
      log.error(error);
    },
  });
  return query;
}
