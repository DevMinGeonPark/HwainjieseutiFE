import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {EventClassList, EventClassListProps} from '@Types/EventDataTypes';
import {getEventClass} from '@src/API/Event/getEventClass';
import {getEventClasslist} from '@src/API/Event/getEventClasslist';

export default function useEventClasslist(params: EventClassListProps) {
  const log = useLog('data');

  const query = useQuery(
    ['useEventClasslist'],
    () => getEventClasslist(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: EventClassList[]) => {
        log.info(
          `useEventClasslist 데이터 불러오기 성공 ${JSON.stringify(
            data,
            null,
            2,
          )}`,
        );
        return data;
      },
      onError: error => {
        log.info(`useEventClasslist 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
