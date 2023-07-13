import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useUserState} from '@src/contexts/UserContext';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';

export default function AdCopy() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const [user, setUser] = useUserState();
  const Toast = useToast();

  //TODO 테스트를 위한 임시 값
  const handleAuth = () => {
    if (user) {
      authStorage.clear();
      Toast.show({title: 'store 삭제완료'});
      setUser(null);
    } else {
      Toast.show({title: 'store에 저장된 값이 없습니다.'});
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.copyText}> KT화인지에스티 회원 전용 App </Text>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.authButtons}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text>로그인</Text>
          </Pressable>
          <Text> | </Text>
          <Pressable onPress={() => handleAuth()}>
            <Text>회원가입</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  copyText: {
    fontSize: 14,
  },
  authContainer: {
    // flex: 1,
    alignItems: 'flex-end',
  },
  authButtons: {
    // flex: 1,
    flexDirection: 'row',
  },
});
