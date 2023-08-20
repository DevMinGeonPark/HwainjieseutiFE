// src/hooks/useDeleteQnA.ts
import {useMutation} from 'react-query';
import useLog from '../useLog';
import {ParamProps} from '@Types/axiosTypes';
import {ConfirmPassword} from '@src/API/ConfirmPassword';
import {Alert} from 'react-native';
import {useToast} from 'native-base';

type AuthError = {
  message: string;
};

export default function useConfirmPW() {
  const log = useLog('root');
  const toast = useToast();

  const mutation = useMutation(
    (params: ParamProps) => ConfirmPassword(params),
    {
      onSuccess: data => {
        log.info('password 검증 완료');
        log.info('status:', data);
        if (data.Status === 'A10') {
          toast.show({
            title: '비밀번호가 일치합니다.',
          });
        } else {
          throw new Error(data.ErrMsg); //onError로 헨들링
        }
      },
      onError: (error: AuthError) => {
        log.info('QnA 삭제 실패', error);
        Alert.alert('비밀번호가 일치하지 않습니다.');
      },
    },
  );

  return mutation;
}
