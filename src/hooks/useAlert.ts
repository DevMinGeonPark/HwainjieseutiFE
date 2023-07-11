import {useCallback} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

export default function useAlert() {
  const AlertInfo = useCallback(({title, message}: InformParams) => {
    if (Platform.OS === 'ios') {
      Alert.alert(title ?? '알림', message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }, []);

  return AlertInfo;
}

interface InformParams {
  title?: string;
  message: string;
}
