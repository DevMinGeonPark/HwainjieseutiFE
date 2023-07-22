import {getProductData} from '@src/API/getProductData';
import {useMutation, useQuery} from 'react-query';
import useLog from './useLog';
// import {MainData} from '@Types/MainDataTypes';
import {ProductProps} from '@src/Types/ProductTypes';
import {ProductData} from '@Types/ProductTypes';

export default function useProductData(params: ProductProps) {
  const log = useLog('dev');

  const query = useQuery('getProductData', () => getProductData(params), {
    notifyOnChangeProps: ['data'],
    onSuccess: (data: ProductData) => {
      log.info(`Product Data 불러오기 성공`);
      return data;
    },
    onError: error => {
      log.info(`Product Data 불러오기 실패`);
    },
  });
  // return mutation;
  return query;
}
