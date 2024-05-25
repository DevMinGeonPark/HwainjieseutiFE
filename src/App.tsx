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
import {getShopVersion} from '@src/API/getShopVersion';
import LOCAL_VERSION from './Utils/localVersion';
import {Platform, Linking} from 'react-native'; // Platform과 Linking 모듈을 임포트합니다.

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
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
  installMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

function App() {
  async function checkShopMajorVersion() {
    try {
      const {ShopVersion} = await getShopVersion(); // ShopVersion 예시: "5.0.15"
      const majorVersion = ShopVersion.split('.')[0]; // '5.0.15'을 '.'으로 분리하고 첫 번째 요소(메이저 버전)를 가져옵니다.

      console.log(`메이저 버전은 ${majorVersion}입니다.`); // 결과 예시: 메이저 버전은 5입니다.
      return majorVersion;
    } catch (error) {
      console.error('샵 버전을 가져오는 데 실패했습니다.', error);
    }
  }

  async function compareVersions() {
    const ShopMajorVersion = await checkShopMajorVersion(); // 비동기 결과 기다림
    const LocalMajorVersion = LOCAL_VERSION.split('.')[0]; // 로컬 메이저 버전

    if (ShopMajorVersion === LocalMajorVersion) {
      console.log('두 메이저 버전이 같습니다.');
      // code push 에 의한 마이너 버전 자동 체크
      // CodePush.sync(
      //   {
      //     installMode: CodePush.InstallMode.IMMEDIATE,
      //     mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
      //     updateDialog: {
      //       mandatoryUpdateMessage:
      //         '필수 업데이트가 있어 설치 후 앱을 재시작합니다.',
      //       mandatoryContinueButtonLabel: '재시작',
      //       optionalIgnoreButtonLabel: '나중에',
      //       optionalInstallButtonLabel: '재시작',
      //       optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠습니까?',
      //       title: '업데이트 안내',
      //     },
      //   },
      //   status => {
      //     console.log(`Changed ${status}`);
      //   },
      //   downloadProgress => {
      //     console.log(
      //       `Downloaded ${downloadProgress.receivedBytes} of ${downloadProgress.totalBytes}`,
      //     );
      //   },
      // ).then(status => {
      //   console.log(`CodePush ${status}`);
      // });
    } else {
      console.log('두 메이저 버전이 다릅니다.');
      // if (Platform.OS === 'android') {
      //   // Android 용 링크
      //   const url =
      //     'https://play.google.com/store/apps/details?id=com.finegst.mshop&hl=ko&gl=US';
      //   Linking.openURL(url).catch(err =>
      //     console.error('Could not open the store page.', err),
      //   );
      // } else if (Platform.OS === 'ios') {
      //   // iOS 용 링크
      //   const url =
      //     'https://apps.apple.com/ph/app/%EC%A3%BC-%ED%99%94%EC%9D%B8%EC%A7%80%EC%97%90%EC%8A%A4%ED%8B%B0/id6468455648';
      //   Linking.openURL(url).catch(err =>
      //     console.error('Could not open the store page.', err),
      //   );
      // }
    }
  }

  useEffect(() => {
    compareVersions();
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
// export default App;
