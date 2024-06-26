import {getProductData} from '@src/API/getProductData';
import {useQuery} from 'react-query';
import useLog from '../useLog';
// import {MainData} from '@Types/MainDataTypes';
import {
  EventData,
  ProductData,
  ParamProps,
  InternetPlusTVData,
} from '@src/Types/ProductTypes';
import {CommonProps} from '@src/Types/CommonTypes';
import {useUserStore} from '@src/Store/userStore';

export default function useProductData(params: CommonProps | ParamProps) {
  const log = useLog('data');

  const {user} = useUserStore();

  const query = useQuery(
    ['getProductData', params],
    // 애플 테스트 후 변경
    // () => getProductData({...params, LogInID: user?.UserId || ''}),
    () => getProductData(params),

    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: EventData | ProductData | InternetPlusTVData) => {
        // log.info(`productDatas 불러오기 성공`, JSON.stringify(data, null, 2));
        log.info(`productDatas 불러오기 성공`);

        return data;
      },
      onError: error => {
        log.error(`productDatas 불러오기 실패 ${error}`);
      },
    },
  );
  // return mutation;
  return query;
}
