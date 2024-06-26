import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import messaging from '@react-native-firebase/messaging';
import useMessaging from './hooks/useMessaging';
import localNotification from './Utils/localNotification';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import {LogBox} from 'react-native';
import {getShopVersion} from '@src/API/getShopVersion';
import LOCAL_VERSION from './Utils/localVersion';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import UpdateModal from './Modules/UpdateModal';
import useLog from './hooks/useLog';
import {StackNavigator} from './Navigators/StackNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

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
  const [updateModal, setUpdateModal] = React.useState(false);

  const log = useLog('root');

  const {requestUserPermission} = useMessaging();

  async function checkShopMajorVersion() {
    try {
      const {ShopVersion} = await getShopVersion(); // ShopVersion 예시: "5.0.15"
      const majorVersion = ShopVersion.split('.')[0]; // '5.0.15'을 '.'으로 분리하고 첫 번째 요소(메이저 버전)를 가져옵니다.

      log.info(`메이저 버전은 ${majorVersion}입니다.`);
      console.log(); // 결과 예시: 메이저 버전은 5입니다.
      return majorVersion;
    } catch (error) {
      log.error('샵 버전을 가져오는 데 실패했습니다.', error);
    }
  }

  async function compareVersions() {
    const ShopMajorVersion = await checkShopMajorVersion(); // 비동기 결과 기다림
    const LocalMajorVersion = LOCAL_VERSION.split('.')[0]; // 로컬 메이저 버전

    if (ShopMajorVersion === LocalMajorVersion) {
      log.info(`APP: 두 메이저 버전이 같습니다.`);
      // code push 에 의한 마이너 버전 자동 체크
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
          console.log(
            `Downloaded ${downloadProgress.receivedBytes} of ${downloadProgress.totalBytes}`,
          );
        },
      ).then(status => {
        console.log(`CodePush ${status}`);
      });
    } else {
      log.info(`APP: 두 메이저 버전이 다릅니다.`);
      setUpdateModal(true);
      SplashScreen.hide();
    }
  }

  useEffect(() => {
    requestUserPermission(); // 알림 권한 요청
    compareVersions();
  }, []);

  async function onMessageReceived(message: any) {
    log.info(`onMessageReceived \n${JSON.stringify(message, null, 2)}`);
    localNotification(message);
  }

  messaging().onMessage(onMessageReceived);

  if (updateModal) {
    return (
      <NativeBaseProvider theme={theme}>
        <UpdateModal />
      </NativeBaseProvider>
    );
  } else {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <NativeBaseProvider theme={theme}>
              <StackNavigator />
            </NativeBaseProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </GestureHandlerRootView>
    );
  }
}

export default CodePush(codePushOptions)(App);
