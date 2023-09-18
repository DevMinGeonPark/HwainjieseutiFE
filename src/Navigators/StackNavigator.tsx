import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Templates/Main';
import Login from '@src/Templates/Login';
import {StackScreenProps} from '@Types/NavigationTypes';
import useAuthLoadEffect from '@src/hooks/useAuthLoadEffect';
import InternetPlusTV from '@src/Templates/InternetPlusTV';
import Products from '@src/Templates/Products';
import Detail from '@src/Templates/Detail';
import Event from '@src/Templates/Event';
import EventBorad from '@src/Templates/EventBorad';
import MyPage from '@src/Templates/MyPage';
import Confirm from '@src/Templates/Confirm';
import RegisterForm from '@src/Templates/RegisterForm';
import CustomerInquiry from '@src/Templates/QnAMain';
import MyPoint from '@src/Templates/MyPoint';
import PrivacyCheck from '@src/Templates/PrivacyCheck';
import SearchResult from '@src/Templates/SearchResult';
import WriteQnA from '@src/Templates/WriteQnA';
import QnADetail from '@src/Templates/QnADetail';
import FindUser from '@src/Templates/FindUser';
import RegisterStipulation from '@src/Templates/RegisterStipulation';
import WebRegister from '@src/Templates/WebRegister';

const Stack = createStackNavigator<StackScreenProps>();

function StackNavigator() {
  // Login Check
  useAuthLoadEffect();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      {/* AuthPages */}
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
      {/* Internet */}
      <Stack.Screen
        name="InternetPlusTV"
        component={InternetPlusTV}
        options={{headerShown: false}}
      />

      {/* Events */}
      <Stack.Screen
        name="Event"
        component={Event}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventBorad"
        component={EventBorad}
        options={{headerShown: false}}
      />

      {/* SideBar Pages */}
      <Stack.Screen
        name="MyPoint"
        component={MyPoint}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />

      {/* Confirm & Register From */}
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStipulation"
        component={RegisterStipulation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterForm"
        component={RegisterForm}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WebRegister"
        component={WebRegister}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="QnAMain"
        component={CustomerInquiry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QnADetail"
        component={QnADetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WriteQnA"
        component={WriteQnA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FindUser"
        component={FindUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {StackNavigator};
