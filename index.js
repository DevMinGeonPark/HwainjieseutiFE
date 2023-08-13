import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';


if (__DEV__) {
    import('./config').then(() => console.log('Reactotron Configured'));
}



// notifee.onBackgroundEvent(async ({ type, detail }) => {
//     console.log('사용자가 알림을 클릭했습니다.', detail.notification);
//     switch (type) {
//         case EventType.PRESSED:
//             console.log('사용자가 알림을 클릭했습니다.', detail.notification);
//             break;
//         case EventType.DISMISSED:
//             console.log('사용자가 알림을 닫았습니다.', detail.notification);
//             break;
//     }
// });




AppRegistry.registerComponent(appName, () => App);