// src/hooks/useDeleteQnA.ts
import {useMutation} from 'react-query';
import {deleteQnA} from '@src/API/QnADetail/deleteQnA';
import useLog from '../useLog';
import {ParamProps} from '@src/Types/MemberTypes';
import {UpdateMember} from '@src/API/RegisterForm/UpdateMember';

export default function useUpdateMember() {
  const log = useLog('dev');
  const mutation = useMutation((params: ParamProps) => UpdateMember(params), {
    onSuccess: data => {
      log.info('멤버 업데이트 완료');
      log.info('status:', data);
    },
    onError: error => {
      log.info('QnA 삭제 실패', error);
    },
  });

  return mutation;
}
