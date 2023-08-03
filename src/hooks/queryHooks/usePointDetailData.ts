import {useQuery} from 'react-query';
import useLog from '../useLog';
import {getPointDetail} from '@src/API/MyPoint/getPointDetail';
import {ParamProps, PointDetailData} from '@Types/PointDetailTypes';

export default function usePointDetailData(params: ParamProps) {
  const log = useLog('dev');

  const transformData = (data: PointDetailData[]): string[][] => {
    return data.map(item => [
      item.PointDate,
      item.PointContent,
      item.PointExpireDate.replace(/9999-\d{2}-\d{2}/g, ''),
      item.PointCharge.toString(),
      item.PointUse.toString(),
    ]);
  };

  const query = useQuery<string[][], Error>(
    ['getPointDetail', params],
    async () => {
      const data = await getPointDetail(params);
      return transformData(data);
    },
    {
      notifyOnChangeProps: ['data'],
      onSuccess: (data: string[][]) => {
        log.info(`데이터 불러오기 성공`);
        return data;
      },
      onError: error => {
        log.info(`데이터 불러오기 실패`);
        log.info(error);
      },
    },
  );
  return query;
}
