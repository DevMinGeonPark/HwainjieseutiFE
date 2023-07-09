import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import Headers from '@Modules/Header';
import withCommontLayout from '@Templates/withCommontLayout';

const Main = () => {
  return (
    <View>
      <Text>dd</Text>
    </View>
    // <SafeAreaView style={styles.safeContainer}>
    //   <View style={{flex: 1}}>
    //     <Headers />
    //   </View>
    //   <View style={{flex: 5}}>
    //     <View style={styles.main}></View>
    //   </View>
    // </SafeAreaView>
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
