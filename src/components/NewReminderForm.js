import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import {notificationManager} from './NotificationManager';

const NewReminderForm = () => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function onPressNotification(notifiTitle, notifiMessage) {
    notificationManager.showNotification(1, notifiTitle, notifiMessage, {}, {});
  }

  return (
    <View style={styles.boxNewReminder}>
      <Text style={styles.labelFieldTitle}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.boxFieldTitle}
      />

      <Text style={styles.labelForm}>Description:</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.boxField}
        multiline={true}
      />

      <Text style={styles.labelForm}>Date: </Text>

      <Text style={styles.labelForm}>Hour: </Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => onPressNotification(title, description)}>
        <Text style={styles.buttonStyleText}>+Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewReminderForm;

const styles = StyleSheet.create({
  boxNewReminder: {
    paddingBottom: 20,
    borderRadius: 10,
  },
  boxFieldTitle: {
    borderColor: '#909090',
    borderBottomWidth: 1,
    fontSize: 23,
    marginBottom: 40,
  },
  boxField: {
    borderColor: '#909090',
    borderBottomWidth: 1,
    fontSize: 20,
    borderTopWidth: 0.3,
    textAlignVertical: 'top',
    overflow: 'scroll',
    height: 150,
  },
  labelFieldTitle: {
    fontSize: 26,
    color: '#1B0C5D',
    marginLeft: 10,
  },
  labelForm: {
    fontSize: 20,
    color: '#1B0C5D',
    marginLeft: 10,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 80 + '%',
    borderRadius: 5,
    height: 40,
    backgroundColor: '#1BFA5D',
  },
  buttonStyleText: {
    fontSize: 23,
    alignSelf: 'center',
    color: '#1B0C5D',
    fontWeight: 'bold',
  },
});
