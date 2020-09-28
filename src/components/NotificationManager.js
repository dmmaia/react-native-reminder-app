import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Plataform} from 'react-native';

class NotificationManager {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token: ', token);
      },

      onNotification: function (notification) {
        console.log('[NotificationManager] onNOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  };

  _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data,
      },
    };
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Android Only Properties */
      ...this._buildAndroidNotification(id, title, message, data, options),
      /* IOS Only Properties */
      ...this._buildIOSNotification(id, title, message, data, options),
      /* IOS and Android Properties */
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  cancelAlllocalNotification = () => {
    if (Plataform.OS === 'ios') {
      PushNotificationIOS.removeAllDelivereNotifications();
    } else {
      PushNotification.cancelLocalNotifications();
    }
  };

  unregister = () => {
    PushNotification.unregister;
  };
}

export const notificationManager = new NotificationManager();
