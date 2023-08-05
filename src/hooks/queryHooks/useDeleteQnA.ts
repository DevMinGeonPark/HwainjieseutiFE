// src/hooks/useDeleteQnA.ts
import {useMutation} from 'react-query';
import {deleteQnA} from '@src/API/QnADetail/deleteQnA';
import useLog from '../useLog';
import {ParamProps} from '@src/Types/QnADetailTypes';

export default function useDeleteQnA() {
  const log = useLog('dev');
  const mutation = useMutation((params: ParamProps) => deleteQnA(params), {
    onSuccess: data => {
      log.info('QnA 삭제 완료');
      log.info('status:', data);
    },
    onError: error => {
      log.info('QnA 삭제 실패', error);
    },
  });

  return mutation;
}
