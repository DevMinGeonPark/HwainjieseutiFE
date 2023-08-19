import EncryptedStorage from 'react-native-encrypted-storage';
import {testType} from '@Types/ContentTypes';

const key = 'push';

const testStore = {
  async get() {
    const rawData = await EncryptedStorage.getItem(key);
    if (!rawData) return null;

    try {
      const data: testType = JSON.parse(rawData);
      return await data;
    } catch (e) {
      return null;
    }
  },
  set(data: testType) {
    return EncryptedStorage.setItem(key, JSON.stringify(data));
  },
  clear() {
    return EncryptedStorage.removeItem(key);
  },
};

export default testStore;
