import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import NewReminderForm from './components/NewReminderForm';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <NewReminderForm />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {},
});
