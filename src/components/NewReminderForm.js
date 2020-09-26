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
    <View>
      <Text style={styles.labelForm}>Title</Text>
      <TextInput
        value={title}
        onChange={(event) => {
          setTitle(event);
        }}
      />

      <Text style={styles.labelForm}>Description</Text>
      <TextInput
        value={description}
        onChange={(event) => {
          setDescription(event);
        }}
      />

      <Text style={styles.labelForm}>Date: </Text>

      <Text style={styles.labelForm}>Hour: </Text>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonStyleText}>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewReminderForm;

const styles = StyleSheet.create({
  labelForm: {
    fontSize: 20,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 98 + '%',
    borderRadius: 5,
    height: 35,
    backgroundColor: '#1BFA5D',
  },
  buttonStyleText: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#1B0C5D',
  },
});
