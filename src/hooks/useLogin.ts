import {login} from '@src/API/auth';
import {useMutation} from 'react-query';
import useAlert from './useAlert';
import useLog from './useLog';
import {useUserState} from '@src/contexts/UserContext';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';

export default function useLogin() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const alert = useAlert();
  const log = useLog('dev');
  const [, setUser] = useUserState();
  const toast = useToast();

  const mutation = useMutation(login, {
    onSuccess: data => {
      if (data.Status === 'A10') {
        navigation.pop();
        log.info('로그인 성공');
        toast.show({title: '로그인 성공'});
        setUser(data.UserNm);
        authStorage.set(data.UserNm);
      } else {
        throw new Error(data.ErrMsg); //onError로 헨들링
      }
    },
    onError: (error: AuthError) => {
      const handle = error.message;
      log.info(`로그인 실패 [${handle}]`);
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
        alert({
          title: '로그인 실패',
          message: '원인불명 관리자에게 문의하세요!',
        });
        log.info(handle);
      }
    },
  });
  return mutation;
}
type AuthError = {
  message: string;
};
