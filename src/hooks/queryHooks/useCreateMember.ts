// src/hooks/useDeleteQnA.ts
import {useMutation} from 'react-query';
import {deleteQnA} from '@src/API/QnADetail/deleteQnA';
import useLog from '../useLog';
import {ParamProps, Res} from '@src/Types/MemberTypes';
import {CreateMember} from '@src/API/RegisterForm/CreateMember';
import {useToast} from 'native-base';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

export default function useCreateMember(
  navigation: StackNavigationProp<StackScreenProps>,
) {
  const log = useLog('root');
  const toast = useToast();
  const mutation = useMutation((params: ParamProps) => CreateMember(params), {
    onSuccess: (data: Res) => {
      if (data.Status === 'A10') {
        log.info('멤버 생성 완료');
        toast.show({
          title: '회원가입이 완료되었습니다.',
        });
        log.info('status:', data);
        navigation.navigate('Main');
      } else {
        throw new Error(data.ErrMsg); //onError로 헨들링
      }
    },
    onError: (error: Error) => {
      log.error('멤버 생성 실패');
      log.error(error);
      Alert.alert(
        '회원가입에 실패하였습니다.',
        error.message, // 문자열 에러 메시지 사용
      );
    },
  });

  return mutation;
}
