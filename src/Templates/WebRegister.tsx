import React, {useState, useRef, useCallback} from 'react';
import {Alert, Linking, View, Button} from 'react-native';
import WebView, {WebViewNavigation} from 'react-native-webview';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Box, Modal, ScrollView} from 'native-base';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import CertiModal from '@src/Modules/WebRegister/CertiModal';

const WebRegister = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [height, setHeight] = useState(0);
  const [showWebView, setShowWebView] = useState(true);
  const [webViewKey, setWebViewKey] = useState(0);

  const webViewRef = useRef<WebView>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalUri, setModalUri] = useState('');

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  function resetAndReloadWebview() {
    setWebViewKey(prevKey => prevKey + 1);
  }

  useFocusEffect(
    useCallback(() => {
      resetAndReloadWebview();
    }, []),
  );

  // This script will be injected into the web page
  const injectedJavaScriptOnLoad = `

    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);

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

    window.alert = function(message) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'alert',
        message,
      }));
    };
 
    window.confirm = function(message) {
      var result = true; 
 
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'confirm',
        message,
        result,
      }));
 
      return result;
    };


    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'submit',
        data: new FormData(event.target)
      }));
    });
    
      


     true;
`;
  // url 감시용
  // const onShouldStartLoadWithRequest = (navState: WebViewNavigation) => {
  //   console.log(navState.url);

  //   return true;
  // };

  const handleOnMessage = (event: {nativeEvent: {data: string}}) => {
    const data = JSON.parse(event.nativeEvent.data);

    if (data.isClicked) {
      setShowWebView(false);
      navigation.navigate('Main');
    }

    // 사이즈 처리
    setHeight(data.scrollHeight);

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
  };

  return (
    <Box flex={1} safeArea bg="white">
      <ScrollView>
        <Header showLogo={showLogo} />
        {showWebView && (
          <WebView
            ref={webViewRef}
            source={{uri: 'https://www.kt-online.shop/bbs/register.php'}}
            userAgent="Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
            style={{height: height, opacity: 0.99, minHeight: 1}}
            javaScriptEnabled={true}
            sharedCookiesEnabled={true} // 쿠키허용
            cacheEnabled={false}
            injectedJavaScript={injectedJavaScriptOnLoad}
            scalesPageToFit={false} // webView zoomIn disable
            allowsInlineMediaPlayback // iOS에서 인라인 재생을 허용합니다.
            mixedContentMode="always" // 모든 콘텐츠를 허용합니다.
            domStorageEnabled={true} // DOM Storage 사용을 허용합니다.
            onMessage={handleOnMessage}
            setSupportMultipleWindows={false} // popup window
            onNavigationStateChange={navState => {
              if (navState.url === 'https://www.kt-online.shop/') {
                webViewRef?.current?.stopLoading(); // WebView 로딩 중단
                navigation.navigate('Main'); // Main으로 이동
              }
            }}
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
