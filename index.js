import { AppRegistry, AppState } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { GlobalStateContext, notificationInfo } from '@src/test/GlobalStateContext';



if (__DEV__) {
    import('./config').then(() => console.log('Reactotron Configured'));
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
    const { notification, data } = remoteMessage;

    notificationInfo.notificationPressed = true;
    console.log("data?.uid:", data?.uid);
    notificationInfo.uid = Number(data?.uid);

    // const channelAnoucement = await notifee.createChannel({
    //     id: 'BackGround',
    //     name: 'BackGround Channel',
    //     importance: AndroidImportance.HIGH,
    // });

    // await notifee.displayNotification({
    //     title: notification.title,
    //     body: notification.body,
    //     data: data,
    //     android: {
    //         channelId: channelAnoucement,
    //         smallIcon: 'ic_launcher_round',
    //         largeIcon: 'ic_launcher',
    //         asForegroundService: true,
    //     },
    // });
});

messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log("이거 실행됨");
})



notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    console.log('현재상태:', AppState.currentState);


    if (type === EventType.PRESS) {
        // navigate here
        console.log(notification?.data);

        // 이 부분을 수정하여 전역 상태를 변경합니다.
        notificationInfo.notificationPressed = true;
        notificationInfo.uid = Number(notification?.data?.uid);
        // globalStateContext.value.notificationPressed = true;
        // globalStateContext.value.uid = Number(notification?.data?.uid);
    }
});

// notifee.onBackgroundEvent(async ({ type, detail }) => {
//     const { notification, pressAction } = detail;

//     if (type === EventType.PRESS) {
//         console.log('현재상태:', AppState.currentState);
//         // navigate here
//     }


//     // navigation.navigate('EventBorad', {Uid: Number(notification?.data?.uid)});
//     // console.log('User pressed finish', notification);
// });



AppRegistry.registerComponent(appName, () => App);