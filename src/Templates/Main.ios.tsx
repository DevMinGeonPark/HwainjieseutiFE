import React, {useState, useRef, useEffect} from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {Box, Flex, Fade} from 'native-base';
import {ActivityIndicator, BackHandler, Linking} from 'react-native';
import popupStorage from '@src/Utils/popupStorage';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {dataTypes} from '@src/Types/notificationTypes';
import GoCustomerCenter from '@src/Atomic/Main/GoCustomerCenter';
import usePopupModal from '@src/hooks/queryHooks/usePopupModal';
import PopupModal from '@src/Modules/Main/PopupModal';

const WebMain = () => {
  const BASE_URL = 'https://kt-online.shop/';

  const injectedJavaScriptOnLoad = `
  // zoom in이 되지 않도록 scale을 1로 고정
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta);

  window.close = function() {
    window.ReactNativeWebView.postMessage("close");
  }

  true;
`;

  const {popupData} = usePopupModal();

  const [webViewKey, setWebViewKey] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(true);

  const [isToggleShow, setIsToggleShow] = useState<boolean>(true);

  useEffect(() => {
    console.log(modal);
  }, [modal]);
  const webViewRef = useRef<WebView>(null);

  // uri를 상태로 관리
  const [uri, setUri] = useState<string>(BASE_URL);
  const [canGoBack, setCanGoBack] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleUri = (url: string) => {
    if (uri === BASE_URL) {
      setUri(`${url}?app_page=1`);
    } else {
      setUri(`${url}`);
    }
  };

  const fn = async () => {
    const status = await popupStorage.get();

    if (!status) {
      return;
    }
    const popUplastTime = new Date(status?.lastDate).getDate();
    const currentLoginDate = new Date().getDate();

    const dateDiff = currentLoginDate - popUplastTime;

    console.log('현재 날짜', dateDiff);

    if (dateDiff >= 1) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const handleBackPress = () => {
    if (canGoBack) {
      webViewRef.current?.goBack();
      return true;
    } else {
      // 앱 종료 또는 다른 동작 수행
      return false;
    }
  };

  const onNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
  };

  const handleWebViewMessage = (event: {nativeEvent: {data: string}}) => {
    console.log('handleWebViewMessage', event.nativeEvent.data);
    if (event.nativeEvent.data === 'close') {
      webViewRef.current?.stopLoading();
      webViewRef.current?.goBack();
    }
  };

  // url 감시용
  const onShouldStartLoadWithRequest = (navState: WebViewNavigation) => {
    // console.log('onShouldStartLoadWithRequest', navState.url);

    // 외부 링크일 경우
    if (
      !navState.url.includes('kt-online.shop') ||
      navState.url.includes('form')
    ) {
      Linking.openURL(navState.url);
      return false;
    }

    if (navState.url === BASE_URL) {
      setIsToggleShow(true);
    } else {
      setIsToggleShow(false);
    }

    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, [canGoBack]);

  // 웹뷰 로딩이 완료되면 splash screen을 숨김
  useEffect(() => {
    SplashScreen.hide();
  }, [webViewRef]);

  // android only
  React.useEffect(() => {
    fn();
    // 백그라운드에서 알림을 받았을 때
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage?.data?.link) {
        // navigation.navigate('Event', {url: remoteMessage.data.url});
        setUri(remoteMessage.data.link);
      }
      notifee.cancelAllNotifications();
    });

    // 앱이 종료된 상태에서 알림을 받았을 때
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        // console.log('getInitialNotification', remoteMessage);
        // 앱이 종료된 상태에서 알림을 받았을 때는 까다로워서 그냥 처리
        if (remoteMessage) {
          if (remoteMessage?.data?.link) {
            // console.log('getInitialNotification link', remoteMessage.data.link);
            setUri(remoteMessage.data.link);
          }
          notifee.cancelAllNotifications();
        }
      });

    // Foreground process
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          const data = detail.notification?.data as unknown as dataTypes;

          console.log('forground', data);
          if (data?.link) {
            console.log('forground link', data.link);
            setUri(data?.link);
          }
          notifee.cancelAllNotifications();
          break;
      }
    });
  }, []);

  return (
    <Flex flex={1} safeArea>
      <WebView
        ref={webViewRef} // WebView를 사용하기 위한 ref
        key={webViewKey} // WebView를 초기화하기 위한 키값
        source={{
          uri: `${uri}?app_page=1`,
        }}
        onNavigationStateChange={onNavigationStateChange}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        javaScriptEnabled={true} // 자바스크립트 허용
        sharedCookiesEnabled={true} // 쿠키허용
        cacheEnabled={true} // 캐시허용
        injectedJavaScript={injectedJavaScriptOnLoad}
        onMessage={handleWebViewMessage} // 웹뷰에서 postMessage를 통해 메시지를 받습니다.
        scalesPageToFit={false} // webView zoomIn disable
        allowsInlineMediaPlayback // iOS에서 인라인 재생을 허용합니다.
        mixedContentMode="always" // 모든 콘텐츠를 허용합니다.
        domStorageEnabled={true} // DOM Storage 사용을 허용합니다.
        setSupportMultipleWindows={false} // popup window 허용
        startInLoadingState={true}
        renderLoading={() => (
          <Box flex={1}>
            <ActivityIndicator size="large" />
          </Box>
        )}
      />
      <Fade in={isToggleShow} entryDuration={1000} exitDuration={1000}>
        <Box>
          <GoCustomerCenter />
        </Box>
      </Fade>
      {popupData && (
        <PopupModal
          isOpen={modal}
          onClose={closeModal}
          data={popupData}
          handleUri={handleUri}
        />
      )}
    </Flex>
  );
};

export default WebMain;
