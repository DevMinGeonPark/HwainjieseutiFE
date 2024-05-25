import {useQuery} from 'react-query';
import useLog from '../useLog';
import {ItemDetail, ParamProps} from '@src/Types/DetailTypes';
import {Platform} from 'react-native';
import {getItemInfo} from '@src/API/Detail/getItemInfo';
import {useUserState} from '@src/contexts/UserContext';

export default function useItemInfoData(params: ParamProps) {
  const log = useLog('data');

  const [user] = useUserState();

  const query = useQuery(
    ['getItemInfoData', params],
    // () => getItemInfo({...params, LogInID: user?.UserId || ''}),
    () => getItemInfo(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: ItemDetail) => {
        log.info(
          `ItemInfoData 데이터 불러오기 성공 ${JSON.stringify(data, null, 2)}`,
        );
        return data;
      },
      onError: error => {
        log.error(`ItemInfoData 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
