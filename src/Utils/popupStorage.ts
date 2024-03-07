import EncryptedStorage from 'react-native-encrypted-storage';
import {Retryer} from 'react-query/types/core/retryer';

interface popupStorageProps {
  lastDate: string;
}

const key = 'popup';

const popupStorage = {
  async get() {
    const rawData = await EncryptedStorage.getItem(key);
    if (!rawData) return null;

    try {
      const data: popupStorageProps = JSON.parse(rawData);
      return await data;
    } catch (e) {
      return null;
    }
  },
  set(data: popupStorageProps) {
    return EncryptedStorage.setItem(key, JSON.stringify(data));
  },
  clear() {
    return EncryptedStorage.removeItem(key);
  },
};

export default popupStorage;
