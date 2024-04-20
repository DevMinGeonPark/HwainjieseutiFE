import {Pressable} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';

const GoCustomerCenter = () => {
  return (
    <Pressable
      onPress={() => {
        Alert.alert('고객센터로 이동합니다.');
      }}
      bg="yellow.100"
      w={100}
      h={100}
      position="absolute"
      bottom={0}
      right={0}></Pressable>
  );
};

export default GoCustomerCenter;
