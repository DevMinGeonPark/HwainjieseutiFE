import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {useToast} from 'native-base';

interface UseMessagingReturnType {
  requestUserPermission: () => Promise<void>;
  callApiSubscribeTopic: () => Promise<void>;
}

const useMessaging = (): UseMessagingReturnType => {
  const toast = useToast();
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
      console.log('구독성공');
      toast.show({
        title: 'ALL 구독에 성공했습니다.',
      });
    } catch (error) {
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
