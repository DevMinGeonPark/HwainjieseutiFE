import {useQuery} from 'react-query';
import useLog from '../useLog';
import {getMemberInfo} from '@src/API/MenuDrawer/getMemberInfo';
import {MemberInfoData, ParamProps} from '@Types/MemberInfoTypes';

import {getItemInfo} from '@src/API/Detail/getItemInfo';

export default function useMemberInfoData(params: ParamProps) {
  const log = useLog('dev');

  const query = useQuery(
    ['getMemberInfo', params],
    () => getMemberInfo(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: MemberInfoData) => {
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
