import {useMutation} from 'react-query';
import {WriteQnA} from '@src/API/WriteQnA/WriteQnA';
import {ParamProps, ResponseProps} from '@src/Types/WriteQnATypes';
import useLog from '../useLog';

export default function useWriteQnA() {
  const log = useLog('dev');
  const mutation = useMutation((params: ParamProps) => WriteQnA(params), {
    onSuccess: (data: ResponseProps) => {
      log.info('QnA 작성 완료');
      log.info('status:', data);
    },
    onError: error => {
      log.info('QnA 작성 실패', error);
    },
  });

  return mutation;
}
