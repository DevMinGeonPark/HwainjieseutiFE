import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';
import {popupModal} from '@src/API/PopupModal';

export default function usePopupModal() {
  const log = useLog('data');

  const query = useQuery(['PopupModal'], () => popupModal(), {
    notifyOnChangeProps: ['data'],
    onSuccess: data => {
      // log.info(`usePopupModal 데이터 불러오기 성공`);
      // log.info('popup', JSON.stringify(data, null, 2));

      return data;
    },
    onError: error => {
      log.info(`usePopupModal 데이터 불러오기 실패`);
      log.error(error);
    },
  });

  // 원하는 이름으로 할당
  const {data: popupData, ...restQuery} = query;

  return {popupData, ...restQuery};
}
