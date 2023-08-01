import {ParamProps} from '@src/Types/RateCalculatorTypes';
import client from '../client';
import {
  MachineCalResType,
  ChargeCalResType,
} from '@src/Types/RateCalculatorTypes';

export async function getRateData(
  body: ParamProps,
): Promise<MachineCalResType | ChargeCalResType | undefined> {
  const res = await client.post('calcharge.php', body);
  return res.data as MachineCalResType | ChargeCalResType | undefined;
}
