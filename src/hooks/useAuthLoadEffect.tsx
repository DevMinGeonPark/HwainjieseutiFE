import {useEffect, useState} from 'react';

import authStorage from '@src/Utils/authStorage';
import logOutStatus from '@src/Utils/logOutStatus';
import {useUserStore} from '@src/Store/userStore';

export default function useAuthLoadEffect() {
  const {setUser} = useUserStore();

  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      const status = await logOutStatus.get();

      if (!auth || !status) {
        return;
      }

      const currentLoginDate = new Date().getDate();
      const lastLoginDate = new Date(status.lastLoginDate).getDate();

      // 이전 로그인 날짜와 현재 로그인 날짜를 비교
      if (currentLoginDate !== lastLoginDate) {
        // 날짜가 다르면 로그아웃 처리
        await authStorage.clear();
        setUser(null);
      } else {
        // 날짜가 같다면 사용자 정보를 설정합니다.
        setUser(auth);
      }
    };

    fn();
  }, [setUser]);
}
