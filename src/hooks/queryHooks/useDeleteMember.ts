import {useMutation} from 'react-query';
import useLog from '../useLog';
import {DeleteParamProps} from '@src/Types/MemberTypes';
import {DeleteMember} from '@src/API/RegisterForm/DeleteMember';

export default function useDeleteMember() {
  const log = useLog('dev');
  const mutation = useMutation(
    (params: DeleteParamProps) => DeleteMember(params),
    {
      onSuccess: data => {
        log.info('멤버 삭제 완료');
        log.info('status:', data);
      },
      onError: error => {
        log.info('멤버 삭제 실패', error);
      },
    },
  );

  return mutation;
}
