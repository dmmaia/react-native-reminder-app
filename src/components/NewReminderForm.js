import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

const NewReminderForm = () => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [timePickerDisplay, setTimePickerDisplay] = useState(false);
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);

  return (
    <View style={styles.boxNewReminder}>
      <Text style={styles.labelFieldTitle}>Title:</Text>
      <TextInput
        value={title}
        onChange={(event) => {
          setTitle(event);
        }}
        style={styles.boxFieldTitle}
      />

      <Text style={styles.labelForm}>Description:</Text>
      <TextInput
        value={description}
        onChange={(event) => {
          setDescription(event);
        }}
        style={styles.boxField}
      />

      <Text style={styles.labelForm}>Date: </Text>

      <Text style={styles.labelForm}>Hour: </Text>

      <TouchableOpacity style={styles.buttonStyle}>
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
    borderBottomWidth: 2,
    fontSize: 23,
    marginBottom: 40,
  },
  boxField: {
    borderColor: '#909090',
    borderBottomWidth: 2,
    fontSize: 20,
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
