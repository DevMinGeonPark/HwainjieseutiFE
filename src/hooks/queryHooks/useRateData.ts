import {useQuery} from 'react-query';
import useLog from '../useLog';
import {getItemInfo} from '@src/API/Detail/getItemInfo';
import {
  ParamProps,
  MachineCalResType,
  ChargeCalResType,
} from '@src/Types/RateCalculatorTypes';
import {getRateData} from '@src/API/Detail/getRateData';

export default function useRateData(params: ParamProps) {
  const log = useLog('data');

  const query = useQuery(
    ['getItemInfoData', params],
    () => getRateData(params),
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: MachineCalResType | ChargeCalResType) => {
        log.info(`Rate 데이터 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.error(`Rate 데이터 불러오기 실패`);
        log.error(error);
      },
    },
  );
  return query;
}
