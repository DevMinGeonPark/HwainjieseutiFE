import notifee, { EventType } from '@notifee/react-native';

export function registerBackgroundEvent(callback) {
    notifee.onBackgroundEvent(async ({ type, detail }) => {
        const { notification, pressAction } = detail;

        if (type === EventType.PRESS) {
            console.log('현재상태:', AppState.currentState);

            const uid = Number(notification?.data?.uid);
            callback(uid);
        }
    });
}
