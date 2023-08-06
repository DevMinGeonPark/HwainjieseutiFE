// src/hooks/useDeleteQnA.ts
import {useMutation} from 'react-query';
import {deleteQnA} from '@src/API/QnADetail/deleteQnA';
import useLog from '../useLog';
import {ParamProps} from '@src/Types/MemberTypes';
import {CreateMember} from '@src/API/RegisterForm/CreateMember';

export default function useCreateMember() {
  const log = useLog('dev');
  const mutation = useMutation((params: ParamProps) => CreateMember(params), {
    onSuccess: data => {
      log.info('멤버 생성 완료');
      log.info('status:', data);
    },
    onError: error => {
      log.info('QnA 삭제 실패', error);
    },
  });

  return mutation;
}
