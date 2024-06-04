import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {useToast} from 'native-base';
import useLog from './useLog';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

interface UseMessagingReturnType {
  requestUserPermission: () => Promise<void>;
}

const useMessaging = (): UseMessagingReturnType => {
  const toast = useToast();
  const log = useLog('root');

  const requestUserPermission = async () => {
    switch (Platform.OS) {
      case 'ios':
        return iosPermission();
      case 'android':
        return androidPermission();
      default:
        return;
    }
  };

  const iosPermission = async () => {
    await messaging().setAPNSToken('anything', 'sandbox');
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return callApiSubscribeTopic();
    }
  };

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        log.info('PUSH Permission granted');
        return callApiSubscribeTopic();
      } else {
        log.info('PUSH Permission denied');
        log.info('IOS Permission request');
        iosPermission();
      }
    } catch (e) {
      const error = e as Error;
      log.info(error.name, error.message);
    }
  };

  const callApiSubscribeTopic = async (retryCount = 0) => {
    try {
      // TODO 테스트 토픽
      await messaging().subscribeToTopic('TEST');
      log.info('구독성공');
      toast.show({
        title: 'ALL 구독에 성공했습니다.',
      });
    } catch (e) {
      const error = e as Error;
      log.info('구독실패');
      if (retryCount < 3) {
        // 최대 3번까지 재시도
        callApiSubscribeTopic(retryCount + 1);
      } else {
        Alert.alert(
          'ALL 구독에 실패했습니다. 해당 메세지를 관리자에게 알려주세요.',
          error.message,
        );
      }
    }
  };

  React.useEffect(() => {
    requestUserPermission();
  }, []);

  return {
    requestUserPermission,
  };
};

export default useMessaging;
