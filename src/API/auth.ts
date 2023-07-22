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
  const res = await client.post('login.php', data);

  return res.data;
}
