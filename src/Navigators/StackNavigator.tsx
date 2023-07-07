import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Templates/test/Home';
import Details from '../Templates/test/Details';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
