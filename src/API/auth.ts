import client from './client';
import {encrypt} from '@Utils/Encrypt';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import {LoginParams} from '@Types/axiosTypes';

type data = {
  ErrMsg: string;
  Status: string;
};

export async function login(params: LoginParams) {
  const data = {
    KTShopID: params.id,
    KTShopPW: encrypt(params.password),
  };
  const headers = {
    'Content-Type': 'application/json',
    KTShopKey: getKTShopKey(),
  };
  const res = await client.post('login.php', data, {headers: headers});

  return res.data;
}
