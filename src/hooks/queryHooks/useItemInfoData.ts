import {useQuery} from 'react-query';
import useLog from '../useLog';
import {ItemDetail, ParamProps} from '@src/Types/DetailTypes';

import {getItemInfo} from '@src/API/Detail/getItemInfo';

export default function useItemInfoData(params: ParamProps) {
  const log = useLog('dev');

  const query = useQuery(
    ['getItemInfoData', params],
    () => getItemInfo(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: ItemDetail) => {
        log.info(`Event 데이터 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.info(`Event 데이터 불러오기 실패`);
        log.info(error);
      },
    },
  );
  return query;
}
