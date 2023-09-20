import React, {useState, useRef, useCallback, useEffect} from 'react';
import {Alert, Linking, View, Button, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Box, Modal, ScrollView, useToast} from 'native-base';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const WebRegister = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [height, setHeight] = useState(0);
  const [showWebView, setShowWebView] = useState(true);

  const [webViewKey, setWebViewKey] = useState<number>(0);

  const webViewRef = useRef<WebView>(null);

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const toast = useToast();

  // This script will be injected into the web page
  const injectedJavaScriptOnLoad = `

    // zoom in이 되지않도록 scale을 1로 고정
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);

    // app에서 필요없는 요소들을 숨김
    var header = document.querySelector('.m-header');
    if (header) {
      header.style.display = 'none';
    }

    var atFooter = document.querySelector('.at-footer');
    if (atFooter) {
        atFooter.style.display = 'none';
    }

    var atMenu = document.querySelector('.at-menu'); 
    if (atMenu) { 
        atMenu.style.display = 'none'; 
    }

    var IDInput = document.getElementById('reg_mb_id');
    if (IDInput) {
      IDInput.autocapitalize = "none";
    }

    // 웹 요소의 최종 Height를 알아내기 위한 코드
    var lastHeight = document.documentElement.scrollHeight;

    new MutationObserver(function() {
      var newHeight = document.documentElement.scrollHeight;
      if (newHeight !== lastHeight) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            scrollHeight: newHeight,
          })
        );
        lastHeight = newHeight;
      }
    }).observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true
    });
    
    window.ReactNativeWebView.postMessage(
       JSON.stringify({
         scrollHeight: document.documentElement.scrollHeight,
       })
     );

    // bbs/register_form.php에서 취소버튼 무효화
    const cancel = document.querySelector('#fregisterform > .text-center > .btn.btn-black');
    cancel.href = "" //cancel 무효화
  
    if (cancel) {
      cancel.addEventListener('click', function(event) {
        event.preventDefault();
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            isClicked: true,
          })
        );
      });
    }


    // Alert 처리
    window.alert = function(message) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'alert',
        message,
      }));
    };
 
    // confirm 처리
    window.confirm = function(message) {
      var result = true; 
 
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'confirm',
        message,
        result,
      }));
 
      return result;
    };

    // submit 처리
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'submit',
        data: new FormData(event.target)
      }));
    });

     true;
`;

  useFocusEffect(
    React.useCallback(() => {
      // 페이지에 진입할 때마다 WebView를 초기화합니다.
      setWebViewKey(prev => prev + 1);
    }, []),
  );

  const handleNavigationChange = (navState: {url: string}) => {
    if (navState.url === 'https://www.kt-online.shop/bbs/register_result.php') {
      toMain(true);
    }
  };

  // url 감시용
  // const onShouldStartLoadWithRequest = (navState: WebViewNavigation) => {
  //  console.log('onShouldStartLoadWithRequest', navState.url);

  //   return true;
  // };

  const toMain = (isClicked: boolean) => {
    if (isClicked) {
      setShowWebView(false);
      toast.show({
        title: '회원가입이 완료되었습니다!',
        duration: 3000,
      });
      navigation.navigate('Main');
    }
  };

  const handleOnMessage = (event: {nativeEvent: {data: string}}) => {
    const data = JSON.parse(event.nativeEvent.data);

    if (data.scrollHeight) {
      // 사이즈 처리
      setHeight(data.scrollHeight);
    } else if (data.isClicked) {
      toMain(data.isClicked);
    } else {
      // alert, confirm 처리
      switch (data.type) {
        case 'alert':
          Alert.alert('Alert', data.message);
          break;
        case 'confirm':
          Alert.alert('Confirm', data.message, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Box flex={1} safeArea bg="white">
      <ScrollView>
        <Header showLogo={showLogo} />
        {showWebView && (
          <WebView
            ref={webViewRef} // WebView를 사용하기 위한 ref
            key={webViewKey} // WebView를 초기화하기 위한 키값
            source={{uri: 'https://www.kt-online.shop/bbs/register.php'}}
            style={{height: height, opacity: 0.99, minHeight: 1}}
            javaScriptEnabled={true} // 자바스크립트 허용
            sharedCookiesEnabled={true} // 쿠키허용
            cacheEnabled={false} // 캐시허용
            injectedJavaScript={injectedJavaScriptOnLoad}
            scalesPageToFit={false} // webView zoomIn disable
            allowsInlineMediaPlayback // iOS에서 인라인 재생을 허용합니다.
            mixedContentMode="always" // 모든 콘텐츠를 허용합니다.
            domStorageEnabled={true} // DOM Storage 사용을 허용합니다.
            onMessage={handleOnMessage} // 웹뷰에서 postMessage를 통해 메시지를 받습니다.
            setSupportMultipleWindows={false} // popup window 허용
            onNavigationStateChange={handleNavigationChange} // navigation url이 변경될 때마다 호출됩니다.
            startInLoadingState={true}
            renderLoading={() => (
              <Box flex={1}>
                <ActivityIndicator size="large" />
              </Box>
            )}
            // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
            onError={syntheticEvent => {
              const {nativeEvent} = syntheticEvent;
              console.error('WebView error: ', nativeEvent);
            }}
            onHttpError={syntheticEvent => {
              const {nativeEvent} = syntheticEvent;
              console.error('WebView HTTP error: ', nativeEvent);
            }}
          />
        )}
        <Footer />
      </ScrollView>
    </Box>
  );
};

export default WebRegister;
