import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';

import DateTimePicker from '@react-native-community/datetimepicker';

const NewReminderForm = () => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());

  const [timePickerDisplay, setTimePickerDisplay] = useState(false);
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);

  return (
    <View>
      <Text style={styles.labelForm}>Title</Text>
      <TextInput />

      <Text style={styles.labelForm}>Description</Text>
      <TextInput />

      <Text style={styles.labelForm}>Date</Text>
      {true && (
        <DateTimePicker
          mode="date"
          value={date}
          onChange={(event) => setDate(event)}
        />
      )}

      <Text style={styles.labelForm}>Hour</Text>
      {false && (
        <RNDateTimePicker
          mode="time"
          value={hour}
          is24Hour={true}
          onChange={(event) => setHour(event)}
        />
      )}
    </View>
  );
};

export default NewReminderForm;

const styles = StyleSheet.create({
  labelForm: {
    fontSize: 18,
  },
});
