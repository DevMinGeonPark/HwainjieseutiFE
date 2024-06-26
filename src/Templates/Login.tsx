import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginForm from '@src/Modules/Login/LoginForm';
import {ScrollView, useToast} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import Footer from '@src/Modules/Footer';
import Layout from '@src/Modules/Layout';

function Login() {
  return (
    <Layout>
      <PanelItem
        title="Login"
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      <LoginForm />
    </Layout>
  );
}

export default withCommontLayout(Login);
