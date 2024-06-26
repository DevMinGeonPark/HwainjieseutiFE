import EncryptedStorage from 'react-native-encrypted-storage';
import {User} from '@Types/ContentTypes';
import {Retryer} from 'react-query/types/core/retryer';

const key = 'auth';

const authStorage = {
  async get() {
    const rawData = await EncryptedStorage.getItem(key);
    if (!rawData) return null;

    try {
      const data: User = JSON.parse(rawData);
      return await data;
    } catch (e) {
      return null;
    }
  },
  async set(data: User) {
    return EncryptedStorage.setItem(key, JSON.stringify(data));
  },
  async clear() {
    return EncryptedStorage.removeItem(key);
  },
};

export default authStorage;
