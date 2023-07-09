import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import DrawerNavigator from '@Navigators/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <DrawerNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
