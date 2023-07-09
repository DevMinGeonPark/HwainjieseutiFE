import cryptoJs from 'crypto-js';
import {ENCRYPT_SECRET_KEY} from '@env';

// 암호화
export const encrypt = (text: string) => {
  const cipher = cryptoJs.AES.encrypt(
    text,
    cryptoJs.enc.Utf8.parse(ENCRYPT_SECRET_KEY.substring(0, 32)),
    {
      iv: cryptoJs.enc.Utf8.parse(''),
      padding: cryptoJs.pad.Pkcs7,
      mode: cryptoJs.mode.CBC,
    },
  );
  return cipher.toString();
};
