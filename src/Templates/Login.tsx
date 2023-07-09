import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '@src/Modules/Header';
import CommonLayout from './withCommontLayout';
import withCommontLayout from './withCommontLayout';

function Login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

export default withCommontLayout(Login);

const styles = StyleSheet.create({});
