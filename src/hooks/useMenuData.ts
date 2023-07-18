import {getMenuData} from '@src/API/getMenuData';
import {useMutation, useQuery} from 'react-query';
import useLog from './useLog';
import {MenuType} from '@src/Types/MenuType';

export default function useMenuData() {
  const log = useLog('dev');

  const query = useQuery('getMenuData', getMenuData, {
    onSuccess: (data: MenuType[]) => {
      log.info(`메인 데이터 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`메인 데이터 불러오기 실패`);
    },
  });
  // return mutation;
  return query;
}
