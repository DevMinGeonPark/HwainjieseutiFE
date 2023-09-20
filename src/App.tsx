import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import DrawerNavigator from '@Navigators/DrawerNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {UserContextProvider} from './contexts/UserContext';
import {DrawerContextProvider} from './contexts/DrawerStateContext';
import messaging from '@react-native-firebase/messaging';
import useMessaging from './hooks/useMessaging';
import localNotification from './Utils/localNotification';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(["Can't open url"]);

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

const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
  installMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

function App() {
  useEffect(() => {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: {
          mandatoryUpdateMessage:
            '필수 업데이트가 있어 설치 후 앱을 재시작합니다.',
          mandatoryContinueButtonLabel: '재시작',
          optionalIgnoreButtonLabel: '나중에',
          optionalInstallButtonLabel: '재시작',
          optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠습니까?',
          title: '업데이트 안내',
        },
      },
      status => {
        console.log(`Changed ${status}`);
      },
      downloadProgress => {
        // 여기서 몇 % 다운로드되었는지 체크 가능
      },
    ).then(status => {
      console.log(`CodePush ${status}`);
    });
  }, []);

  const {requestUserPermission} = useMessaging();

  React.useEffect(() => {
    requestUserPermission(); // 알림 권한 요청
  }, []);

  async function onMessageReceived(message: any) {
    console.log('onMessageReceived', message);
    localNotification(message);
  }

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

export default CodePush(codePushOptions)(App);
