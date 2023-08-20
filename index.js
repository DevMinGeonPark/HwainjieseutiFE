import { AppRegistry, AppState } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';



if (__DEV__) {
    import('./config').then(() => console.log('Reactotron Configured'));
}

// Android에서 백그라운드를 처리하기 위한 코드 IOS는 바로 foreground로 들어옴
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});


notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('Background Event', { type, detail });
});


AppRegistry.registerComponent(appName, () => App);