import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';

const ImageProduct = () => {
  const width = Dimensions.get('window').width;

  return (
    <View>
      <Text>d</Text>
    </View>
  );
};

export default withCommontLayout(ImageProduct);

const styles = StyleSheet.create({});
