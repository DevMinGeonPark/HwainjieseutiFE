import {AppState} from 'react-native';
import notifee, {AndroidImportance, AndroidColor} from '@notifee/react-native';

interface MessageData {
  data: {
    body: string;
    title: string;
    uid: string;
  };
  from: string;
  messageId: string;
  notification: {
    body: string;
    title: string;
  };
}

const localNotification = async (message: any) => {
  const channelAnoucement = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: message.data.title,
    body: message.data.body,
    data: message.data,
    android: {
      channelId: channelAnoucement,
      smallIcon: 'ic_launcher_round',
      largeIcon: 'ic_launcher',
    },
  });
};

export default localNotification;
