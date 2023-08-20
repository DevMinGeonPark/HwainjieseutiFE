import {AppState} from 'react-native';
import notifee, {AndroidImportance, AndroidColor} from '@notifee/react-native';

const localNotification = async (message: any) => {
  const channelAnoucement = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: message.data.title,
    body: message.data.body,
    data: message.data,
    android: {
      channelId: channelAnoucement,
      color: '#000000',
      smallIcon: 'ic_notification',
      largeIcon: 'ic_launcher',
    },
  });
};

export default localNotification;
