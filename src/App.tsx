import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Navigators/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
