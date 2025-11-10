import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import MainNavigation from './src/Navigation/MainNavigation';

import {
  setupNotificationChannel,
  requestNotificationPermission,
  getFcmToken,
  registerForegroundListener,
} from './src/Screens/Notification';  

const App = () => {
  useEffect(() => {
    async function initNotifications() {
      await setupNotificationChannel();
      await requestNotificationPermission();
      const token = await getFcmToken();
      console.log('FCM Token:', token);
    }

    initNotifications();

    const unsubscribe = registerForegroundListener();

  
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;