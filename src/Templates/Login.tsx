import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Header from '@src/Modules/Header';
import CommonLayout from './withCommontLayout';
import withCommontLayout from './withCommontLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginForm from '@src/Modules/LoginForm';

function Login() {
  return (
    <>
      <View style={styles.contrainer}>
        <View style={styles.LabelContrainer}>
          <Icon name="user" size={25} />
          <View style={styles.Label}>
            <Text style={styles.LabeText}>Login</Text>
          </View>
        </View>
      </View>
      <LoginForm />
    </>
  );
}

export default withCommontLayout(Login);

const styles = StyleSheet.create({
  contrainer: {
    borderBottomWidth: 1,
    borderBlockColor: '#CCC',
  },
  LabelContrainer: {
    flexDirection: 'row',
    margin: 15,
  },
  Label: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  LabeText: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
