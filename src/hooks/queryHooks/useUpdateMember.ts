import {useMutation} from 'react-query';
import {deleteQnA} from '@src/API/QnADetail/deleteQnA';
import useLog from '../useLog';
import {ParamProps} from '@src/Types/MemberTypes';
import {UpdateMember} from '@src/API/RegisterForm/UpdateMember';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useToast} from 'native-base';
import {Alert} from 'react-native';

// TODO

export default function useUpdateMember(
  navigation: StackNavigationProp<StackScreenProps>,
) {
  const log = useLog('root');
  const toast = useToast();
  const mutation = useMutation((params: ParamProps) => UpdateMember(params), {
    onSuccess: data => {
      if (data.Status.includes('A')) {
        toast.show({
          title: '정보수정이 완료되었습니다.',
        });

        log.info('status:', data);
      } else {
        console.log(data);
        throw new Error(data.ErrMsg); //onError로 헨들링
      }
    },
    onError: (error: Error) => {
      log.error('정보 수정 실패');
      log.error(error);
      Alert.alert(
        '정보수정에 실패했습니다.',
        error.message, // 문자열 에러 메시지 사용
      );
    },
  });

  return mutation;
}
