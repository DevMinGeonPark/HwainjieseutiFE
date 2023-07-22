import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Templates/Main';
import Login from '@src/Templates/Login';
import {StackScreenProps} from '@Types/NavigationTypes';
import useAuthLoadEffect from '@src/hooks/useAuthLoadEffect';
import ImageProduct from '@src/Templates/ImageProduct';
import useMenuData from '@src/hooks/useMenuData';
import Apple from '@src/Templates/Products/_Apple';
import Samsung from '@src/Templates/Products/_Samsung';
import Products from '@src/Templates/Products/Products';
import Detail from '@src/Templates/Detail';

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

      {/* SubPages */}
      <Stack.Screen
        name="Samsung"
        component={Products}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apple"
        component={Products}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Etc"
        component={Products}
        options={{headerShown: false}}
      />

      {/* Detaisls */}
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />

      {/* TEST */}
      <Stack.Screen
        name="ImageProduct"
        component={ImageProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {StackNavigator};
