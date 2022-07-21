import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
moment.locale('ko');
function DateHead(props) {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {moment().format('YYYY년 MM월 DD일')}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {backgroundColor: '#26a69a'},
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
export default DateHead;
