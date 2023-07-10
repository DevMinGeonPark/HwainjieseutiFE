import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';

// type Props = {
//   ;
// };

const Product = (provider: string) => {
  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default withCommontLayout(Product);

const styles = StyleSheet.create({});
