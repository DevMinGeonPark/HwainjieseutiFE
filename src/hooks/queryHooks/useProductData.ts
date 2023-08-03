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

export default function useProductData(params: CommonProps | ParamProps) {
  const log = useLog('dev');

  const query = useQuery(
    ['getProductData', params],
    () => getProductData(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: EventData | ProductData | InternetPlusTVData) => {
        log.info(`productDatas 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.info(`productDatas 불러오기 실패`);
      },
    },
  );
  // return mutation;
  return query;
}
