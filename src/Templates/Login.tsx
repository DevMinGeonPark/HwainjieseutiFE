import {StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginForm from '@src/Modules/LoginForm';
import {useUserState} from '@src/contexts/UserContext';
import {useToast} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';

function Login() {
  // const user = getUserName();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const toast = useToast();
  const [user] = useUserState();

  useEffect(() => {
    if (!!user) {
      navigation.pop();
      toast.show({title: '이미 로그인 되어있습니다.'});
    }
  }, []);
  return (
    // 수정필요
    <>
      <PanelItem
        title="Login"
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      <LoginForm />
    </>
  );
}

export default withCommontLayout(Login);

const styles = StyleSheet.create({
  contrainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
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
    color: 'black',
    fontWeight: 'bold',
  },
});
