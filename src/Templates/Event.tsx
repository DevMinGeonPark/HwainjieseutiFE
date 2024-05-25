import React, {useState, useRef} from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';
import withCommontLayout from './withCommontLayout';
import {Box} from 'native-base';
import {Alert, ActivityIndicator} from 'react-native';

import {useUserState} from '@src/contexts/UserContext';
import {useRoute} from '@react-navigation/native';

const Event = () => {
  const [webViewKey, setWebViewKey] = useState<number>(0);
  const routeParams = useRoute().params as {url: string} | undefined;

  // TODO: Event Type을 받아서 수정해야할듯함
  const url = routeParams?.url
    ? routeParams.url
    : 'https://kt-online.shop/event.php';

  const [user] = useUserState();

  const [height, setHeight] = useState(0);

  const [loading, setLoading] = useState(true);

  const webViewRef = useRef<WebView>(null);

  const injectedJavaScriptOnLoad = `
    // 페이지 로드 전에 .m-header 숨기기
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.m-header { display: none !important; }';
    document.head.appendChild(style);

    // zoom in이 되지 않도록 scale을 1로 고정
    const meta = document.createElement('meta'); 
    meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); 
    meta.setAttribute('name', 'viewport'); 
    document.getElementsByTagName('head')[0].appendChild(meta);
    

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

    const viewIcon = document.querySelector('#thema_wrapper > div.at-body > div > div > div.view-wrap > div.print-hide.view-icon');
    if (viewIcon) {
      viewIcon.style.display = 'none';
    }

    

    function getVisibleHeight() {
      const allElements = document.querySelectorAll('*');
      let totalHeight = 0;
    
      allElements.forEach(element => {
        if (window.getComputedStyle(element).display !== 'none') {
          totalHeight = Math.max(totalHeight, element.offsetTop + element.offsetHeight);
        }
      });
    
      return totalHeight;
    }
    
    var lastHeight = getVisibleHeight();
    
    new MutationObserver(function() {
      var newHeight = getVisibleHeight();
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
        scrollHeight: getVisibleHeight(),
      })
    );
    
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
  
    window.ReactNativeWebView.postMessage(JSON.stringify({
      type: 'done'
    }));


     true;
`;

  const handleOnMessage = (event: {nativeEvent: {data: string}}) => {
    const data = JSON.parse(event.nativeEvent.data);

    if (data.scrollHeight) {
      // 사이즈 처리
      console.log('scrollHeight', data.scrollHeight);
      setHeight(data.scrollHeight);
    } else {
      // alert, confirm 처리
      switch (data.type) {
        case 'done':
          console.log('done');
          setLoading(false);
          break;
        case 'Link':
          console.log('Link', data.url);
          break;
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

  // url 감시용
  const onShouldStartLoadWithRequest = (navState: WebViewNavigation) => {
    console.log('onShouldStartLoadWithRequest', navState.url);

    return true;
  };

  return (
    <Box>
      {user?.UserId && loading && <ActivityIndicator size="large" />}
      {user?.UserId && (
        <WebView
          ref={webViewRef} // WebView를 사용하기 위한 ref
          key={webViewKey} // WebView를 초기화하기 위한 키값
          source={{
            uri: `${url}?loginid=${user?.UserId}`,
          }}
          style={{
            height: height || 1200,
            opacity: loading ? 0 : 0.99,
            minHeight: 1,
          }}
          onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
          javaScriptEnabled={true} // 자바스크립트 허용
          sharedCookiesEnabled={true} // 쿠키허용
          cacheEnabled={false} // 캐시허용
          injectedJavaScript={injectedJavaScriptOnLoad}
          onMessage={handleOnMessage} // 웹뷰에서 postMessage를 통해 메시지를 받습니다.
          scalesPageToFit={false} // webView zoomIn disable
          allowsInlineMediaPlayback // iOS에서 인라인 재생을 허용합니다.
          mixedContentMode="always" // 모든 콘텐츠를 허용합니다.
          domStorageEnabled={true} // DOM Storage 사용을 허용합니다.
          setSupportMultipleWindows={true} // popup window 허용
          startInLoadingState={true}
          renderLoading={() => (
            <Box flex={1}>
              <ActivityIndicator size="large" />
            </Box>
          )}
        />
      )}
    </Box>
  );
};

export default withCommontLayout(Event);
