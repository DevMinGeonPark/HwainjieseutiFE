import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function AdCopy() {
  const navigation = useNavigation<any>();
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
          <Pressable onPress={() => console.log('signin')}>
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
    flex: 1,
    flexDirection: 'row',
  },
  copyText: {
    fontSize: 14,
  },
  authContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  authButtons: {
    flex: 1,
    flexDirection: 'row',
  },
});
