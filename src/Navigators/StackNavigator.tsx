import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Templates/Main';
import Login from '@src/Templates/Login';
import {StackScreenProps} from '@Types/NavigationTypes';

const Stack = createStackNavigator<StackScreenProps>();
// export default
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {StackNavigator};
