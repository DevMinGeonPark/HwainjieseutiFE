import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import DrawerNavigator from '@Navigators/DrawerNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {UserContextProvider} from './contexts/UserContext';
import {DrawerContextProvider} from './contexts/DrawerStateContext';
import messaging from '@react-native-firebase/messaging';
import useMessaging from './hooks/useMessaging';

import localNotification from './Utils/localNotification';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
});

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      400: {
        normal: 'SpoqaHanSansNeo-Regular',
      },
      500: {
        normal: 'SpoqaHanSansNeo-Medium',
      },
      600: {
        normal: 'SpoqaHanSansNeo-Medium',
      },
      700: {
        normal: 'SpoqaHanSansNeo-Bold',
      },
      800: {
        normal: 'SpoqaHanSansNeo-Bold',
      },
      900: {
        normal: 'SpoqaHanSansNeo-Bold',
      },
    },
  },
  fonts: {
    heading: 'SpoqaHanSansNeo',
    body: 'SpoqaHanSansNeo',
    mono: 'SpoqaHanSansNeo',
  },
});

export default function App() {
  const {requestUserPermission, callApiSubscribeTopic} = useMessaging();

  React.useEffect(() => {
    requestUserPermission(); // 알림 권한 요청
    callApiSubscribeTopic(); // 토픽 구독
  }, []);

  async function onMessageReceived(message: any) {
    console.log('onMessageReceived', message);
    localNotification(message);
  }

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  messaging().onMessage(onMessageReceived);

  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <DrawerContextProvider>
          <NavigationContainer>
            <NativeBaseProvider theme={theme}>
              <DrawerNavigator />
            </NativeBaseProvider>
          </NavigationContainer>
        </DrawerContextProvider>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
