import {useQuery} from 'react-query';
import useLog from '../useLog';
import {getMemberInfo} from '@src/API/MenuDrawer/getMemberInfo';
import {MemberInfoData, ParamProps} from '@Types/MemberInfoTypes';
import authStorage from '@src/Utils/authStorage';

// TEST
import {useUserStore} from '@src/Store/userStore';

export default function useMemberInfoData(params: ParamProps) {
  const log = useLog('data');

  const {user, setUser, hasUser} = useUserStore();

  const query = useQuery(
    ['getMemberInfo', params],
    () => getMemberInfo(params),
    {
      enabled: hasUser(),
      notifyOnChangeProps: ['data'],
      onSuccess: (data: MemberInfoData) => {
        log.info(
          `MemberInfoData 데이터 불러오기 성공\n${JSON.stringify(
            data,
            null,
            2,
          )}`,
        );

        setUser({
          UserId: user?.UserId || '',
          UserNm: data.UserNm,
          Point: data?.UserPoint,
        });
        authStorage.set({
          UserId: user?.UserId || '',
          UserNm: data.UserNm,
          Point: data?.UserPoint,
        });

        return data;
      },
      onError: error => {
        log.error(`MemberInfoData 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
