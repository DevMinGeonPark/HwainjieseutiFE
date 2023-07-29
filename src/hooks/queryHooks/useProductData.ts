import {getProductData} from '@src/API/getProductData';
import {useQuery} from 'react-query';
import useLog from '../useLog';
// import {MainData} from '@Types/MainDataTypes';
import {
  EventData,
  ProductData,
  ProductProps,
  SubPageBaseProps,
} from '@src/Types/ProductTypes';

export default function useProductData(
  params: SubPageBaseProps | ProductProps,
) {
  const log = useLog('dev');

  const query = useQuery('getProductData', () => getProductData(params), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: EventData | ProductData) => {
      log.info(`event 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`event 불러오기 실패`);
    },
  });
  // return mutation;
  return query;
}