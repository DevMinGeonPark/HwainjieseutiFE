import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {EventClassNotice, EventClassNoticeList} from '@Types/EventDataTypes';
import {getEventClassNotice} from '@src/API/Event/getEventClassNotice';

export default function useEventClassNotice(params: EventClassNotice) {
  const log = useLog('data');

  const query = useQuery(
    ['useEventClassNotice'],
    () => getEventClassNotice(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: EventClassNoticeList[]) => {
        log.info(
          `useEventClassNotice 데이터 불러오기 성공 ${JSON.stringify(
            data,
            null,
            2,
          )}`,
        );
        return data;
      },
      onError: error => {
        log.info(`useEventClassNotice 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
