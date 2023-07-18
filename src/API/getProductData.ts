import client from './client';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import {ProductProps} from '@src/Types/ProductTypes';

export async function getProductData(params: ProductProps) {
  const data = {
    MenuType: params.MenuType,
    MenuVar: params.MenuVar,
  };
  const headers = {
    'Content-Type': 'application/json',
    KTShopKey: getKTShopKey(),
  };
  const res = await client.post('subpage.php', data, {headers: headers});

  return res.data;
}
