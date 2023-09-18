import {useMutation} from 'react-query';
import useLog from '../useLog';
import {deleteParamProps} from '@src/Types/EventDataTypes';
import {deleteComment} from '@src/API/Event/deleteComment';

export default function useDeleteComment() {
  const log = useLog('root');
  const mutation = useMutation(
    (params: deleteParamProps) => deleteComment(params),
    {
      onSuccess: data => {
        log.info('comment 삭제 완료');
        log.info('status:', data);
      },
      onError: error => {
        log.error('comment 삭제 실패', error);
      },
    },
  );

  return mutation;
}
