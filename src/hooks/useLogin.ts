import {login} from '@src/API/auth';
import {LoginParams} from '@Types/axiosTypes';
import {useMutation} from 'react-query';
import useToast from './useToast';

export default function useLogin() {
  const toast = useToast();

  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log(JSON.stringify(data, 2, null));
      if (data.Status === 'A10') {
        //로그인 성공
        console.log('로그인 성공');
      } else {
        //로그인 실패
        console.log('log: 로그인 실패');
        throw new Error(data.ErrMsg);
      }
    },
    onError: (error: AuthError) => {
      const handle = error.message;
      //   console.log(error.message);
      toast({
        title: '로그인 실패',
        message: '아이디 혹은 비밀번호를 확인해주세요',
      });

      if (handle === '로그인 정보 없음') {
        // console.log('없는 아이디입니다.');
      } else if (handle === 'Password Input') {
        console.log('아이디 혹은 비밀번호를 입력해주세요');
      } else {
        console.log(handle);
      }
    },
  });
  return mutation;
}
type AuthError = {
  message: string;
};
