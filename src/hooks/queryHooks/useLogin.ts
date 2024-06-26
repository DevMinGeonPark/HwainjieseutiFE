import {login} from '@src/API/auth';
import {useMutation} from 'react-query';
import useAlert from '../useAlert';
import useLog from '../useLog';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';
import {DrawerScreenProps} from '@Types/NavigationTypes';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import logOutStatus from '@src/Utils/logOutStatus';

import {useUserStore} from '@src/Store/userStore';
import useMemberInfoData from './useMemberInfoData';

interface LoginData {
  id: string;
  loginType: string;
}

export default function useLogin({id, loginType}: LoginData) {
  const stackNavigation =
    useNavigation<StackNavigationProp<StackScreenProps>>();
  // const drawerNavigation =
  //   useNavigation<DrawerNavigationProp<DrawerScreenProps>>();

  const {refetch} = useMemberInfoData({
    KTShopID: id || '',
  });

  const alert = useAlert();
  const log = useLog('root');

  const {setUser} = useUserStore();

  // const toast = useToast();

  const mutation = useMutation(login, {
    onSuccess: data => {
      log.info('onSuccess:');
      if (data.Status === 'A10' || data.Status === 'A50') {
        log.info('로그인 성공 정보:', JSON.stringify(data, null, 2));
        log.info('setLogin 시작');

        setUser({UserId: id, UserNm: data.UserNm, Point: 0});
        log.info('setLogin 완료 & refetch 시작');
        stackNavigation.navigate('Main');
        // loginType === 'drawer'
        //   ? drawerNavigation.goBack()
        //   : stackNavigation.navigate('Main');
        authStorage.set({UserId: id, UserNm: data.UserNm, Point: 0});
        logOutStatus.set({lastLoginDate: new Date().toISOString()});
      } else {
        log.error('beforeOnError:', JSON.stringify(data, null, 2));
        throw new Error(data.ErrMsg); //onError로 헨들링
      }
    },
    onError: (error: {message: string}) => {
      const handle = error.message;
      log.error(`로그인 실패 [${handle}]`);
      if (handle === '로그인 정보 없음') {
        alert({
          title: '로그인 실패',
          message:
            '로그인 정보가 없습니다.\n 아이디 혹은 비밀번호를 확인해주세요',
        });
      } else if (handle === 'Password Input') {
        alert({
          title: '로그인 실패',
          message: '아이디 혹은 비밀번호를 입력해주세요',
        });
      } else if (handle === 'ID Input') {
        alert({
          title: '로그인 실패',
          message: '아이디를 입력해주세요.',
        });
      } else {
        console.log(handle);
        alert({
          title: '로그인 실패',
          message: '원인불명 관리자에게 문의하세요!',
        });
        log.error(handle);
      }
    },
  });
  return mutation;
}
