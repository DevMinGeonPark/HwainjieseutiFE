import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import {ProductProps} from '@src/Types/ProductTypes';

export async function getProductData(data: ProductProps) {
  const res = await client.post('subpage.php', data);

  return res.data;
}
