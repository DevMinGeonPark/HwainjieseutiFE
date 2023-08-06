import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginForm from '@src/Modules/Login/LoginForm';
import {useUserState} from '@src/contexts/UserContext';
import {useToast} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';

function Login() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const toast = useToast();
  const [user] = useUserState();

  useEffect(() => {
    if (!!user) {
      navigation.navigate('Main');
      toast.show({title: '이미 로그인 되어있습니다.'});
    }
  }, []);
  return (
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

export default React.memo(withCommontLayout(Login));
