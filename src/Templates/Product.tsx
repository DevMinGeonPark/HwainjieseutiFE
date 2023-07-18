import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';

// type Props = {
//   ;
// };

const Product = () => {
  const route = useRoute();
  const params = route.params;

  // TODO:: Params을 이용해서 요청하는 기능을 만들기

  console.log(params);
  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default withCommontLayout(Product);

const styles = StyleSheet.create({});
