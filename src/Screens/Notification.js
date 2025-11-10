import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

export async function setupNotificationChannel() {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });
}

export async function requestNotificationPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Notification permission granted');
  } else {
    console.log('Permission denied');
  }
}

export async function getFcmToken() {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
  return token;
}

export function registerForegroundListener() {
  return messaging().onMessage(async remoteMessage => {
    console.log('Foreground message:', remoteMessage);
    await notifee.displayNotification({
      title: remoteMessage.notification?.title ?? 'Notification',
      body: remoteMessage.notification?.body ?? '',
      android: { channelId: 'default' },
    });
  });
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background message:', remoteMessage);
  await notifee.displayNotification({
    title: remoteMessage?.notification?.title ?? 'Background Message',
    body: remoteMessage.notification?.body ?? '',
    android: { channelId: 'default' },
  });
});
