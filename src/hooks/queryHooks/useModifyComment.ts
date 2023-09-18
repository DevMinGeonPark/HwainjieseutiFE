import {useMutation} from 'react-query';
import {WriteParamProps, modifyParamProps} from '@src/Types/EventDataTypes';
import useLog from '../useLog';
import {writeComment} from '@src/API/Event/writeComment';
import {modifyComment} from '@src/API/Event/modifyComment';

export default function useModifyComment() {
  const log = useLog('root');
  const mutation = useMutation(
    (params: modifyParamProps) => modifyComment(params),
    {
      onSuccess: (data: any) => {
        log.info('Comment 수정 완료');
        log.info('status:', data);
      },
      onError: error => {
        log.error('Comment 수정 실패', error);
      },
    },
  );

  return mutation;
}
