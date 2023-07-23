import {BodyType} from '@src/Types/RateCalculatorTypes';
import client from '../client';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import {
  MachineCalResType,
  ChargeCalResType,
} from '@src/Types/RateCalculatorTypes';

export async function getRateData(
  body: BodyType,
): Promise<MachineCalResType | ChargeCalResType | undefined> {
  console.log(body);
  const res = await client.post('calcharge.php', body);
  return res.data;
}
