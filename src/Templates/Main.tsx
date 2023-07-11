import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import Headers from '@Modules/Header';
import withCommontLayout from '@Templates/withCommontLayout';

const Main = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default withCommontLayout(Main);

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  main: {
    flex: 1,
  },
});
