import EncryptedStorage from 'react-native-encrypted-storage';
import {Retryer} from 'react-query/types/core/retryer';

interface Status {
  lastLoginDate: string;
}

const key = 'lastLoginDate';

const logOutStatus = {
  async get() {
    const rawData = await EncryptedStorage.getItem(key);
    if (!rawData) return null;

    try {
      const data: Status = JSON.parse(rawData);
      return await data;
    } catch (e) {
      return null;
    }
  },
  async set(data: Status) {
    return EncryptedStorage.setItem(key, JSON.stringify(data));
  },
  async clear() {
    return EncryptedStorage.removeItem(key);
  },
};

export default logOutStatus;
