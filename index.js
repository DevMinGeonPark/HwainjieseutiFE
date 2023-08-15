import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';


if (__DEV__) {
    import('./config').then(() => console.log('Reactotron Configured'));
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
    const { notification, data } = remoteMessage;
    notifee.displayNotification({
        title: notification.title,
        body: notification.body,
        data
    });
});

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    // Check if the user pressed the "Mark as read" action
    if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
        // Update external API
        cosole.log("test");

        // Remove the notification
        await notifee.cancelNotification(notification.id);
    }
});



AppRegistry.registerComponent(appName, () => App);