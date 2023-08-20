// 미사용 코드로 예상됨 삭제 고려

import {getMenuData} from '@src/API/getMenuData';
import {useMutation, useQuery} from 'react-query';
import useLog from '../useLog';

import {MenuType} from '@src/Types/MenuType';

export default function useMenuData() {
  const log = useLog('data');

  const query = useQuery('getMenuData', getMenuData, {
    onSuccess: (data: MenuType[]) => {
      log.info(`menu 데이터 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.error(`menu 데이터 불러오기 실패 ${error}`);
    },
  });
  // return mutation;
  return query;
}
