import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {useToast} from 'native-base';
import useLog from './useLog';

interface UseMessagingReturnType {
  requestUserPermission: () => Promise<void>;
  callApiSubscribeTopic: () => Promise<void>;
}

const useMessaging = (): UseMessagingReturnType => {
  const toast = useToast();
  const log = useLog('root');
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return callApiSubscribeTopic();
    }
  };

  const callApiSubscribeTopic = async () => {
    try {
      await messaging().subscribeToTopic('ALL');
      log.info('구독성공');
      toast.show({
        title: 'ALL 구독에 성공했습니다.',
      });
    } catch (error) {
      log.info('구독실패');
      toast.show({
        title: 'ALL 구독에 실패했습니다.',
      });
    }
  };

  React.useEffect(() => {
    requestUserPermission();
  }, []);

  return {
    requestUserPermission,
    callApiSubscribeTopic,
  };
};

export default useMessaging;
