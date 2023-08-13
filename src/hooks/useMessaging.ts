import React from 'react';
import messaging from '@react-native-firebase/messaging';

interface UseMessagingReturnType {
  requestUserPermission: () => Promise<void>;
  callApiSubscribeTopic: () => Promise<void>;
}

const useMessaging = (): UseMessagingReturnType => {
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
      console.log(`ALL 구독 성공!!`);
    } catch (error) {
      console.log(`ALL 구독 실패!!`);
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
