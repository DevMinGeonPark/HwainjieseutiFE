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
    <>
      <View style={styles.contrainer}>
        <View style={styles.LabelContrainer}>
          <Icon name="user" size={25} />
          <View style={styles.Label}>
            <Text style={styles.LabeText}>Login</Text>
          </View>
        </View>
      </View>
      <LoginForm />
    </>
  );
}

export default withCommontLayout(Login);

const styles = StyleSheet.create({
  contrainer: {
    borderBottomWidth: 1,
    borderBlockColor: '#CCC',
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
    fontWeight: 'bold',
  },
});
