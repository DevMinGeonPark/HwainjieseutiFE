import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Templates/Main';
import Login from '@src/Templates/Login';
import {StackScreenProps} from '@Types/NavigationTypes';
import Product from '@src/Templates/Product';
import useAuthLoadEffect from '@src/hooks/useAuthLoadEffect';
import ImageProcut from '@src/Templates/ImageProduct';

const Stack = createStackNavigator<StackScreenProps>();
// export default
function StackNavigator() {
  useAuthLoadEffect();
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
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageProduct"
        component={ImageProcut}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {StackNavigator};
