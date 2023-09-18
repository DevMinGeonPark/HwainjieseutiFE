import {useMutation} from 'react-query';
import {WriteParamProps} from '@src/Types/EventDataTypes';
import useLog from '../useLog';
import {writeComment} from '@src/API/Event/writeComment';

export default function useWriteComment() {
  const log = useLog('root');
  const mutation = useMutation(
    (params: WriteParamProps) => writeComment(params),
    {
      onSuccess: (data: any) => {
        log.info('Comment 작성 완료');
        log.info('status:', data);
      },
      onError: error => {
        log.error('Comment 작성 실패', error);
      },
    },
  );

  return mutation;
}
