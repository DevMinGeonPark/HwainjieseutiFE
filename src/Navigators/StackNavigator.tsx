import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

import WebMain from '@src/Templates/WebMain';

const Stack = createStackNavigator<StackScreenProps>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={WebMain}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export {StackNavigator};
