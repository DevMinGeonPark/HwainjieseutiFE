import {getMainData} from '@src/API/getMainData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {EventData, Body} from '@Types/EventDataTypes';
import {getEventData} from '@src/API/Event/getEventData';
import {popupModal} from '@src/API/PopupModal';

export default function usePopupModal() {
  const log = useLog('data');

  const query = useQuery(['PopupModal'], () => popupModal(), {
    notifyOnChangeProps: ['data'],
    onSuccess: data => {
      log.info(`usePopupModal 데이터 불러오기 성공`);
      log.info('popup', JSON.stringify(data, null, 2));
      return data;
    },
    onError: error => {
      log.info(`usePopupModal 데이터 불러오기 실패`);
      log.error(error);
    },
  });
  return query;
}
