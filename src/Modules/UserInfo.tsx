import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useUserState} from '@src/contexts/UserContext';

export default function UserInfo() {
  const [user] = useUserState();

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        {user
          ? `${user}님이 보유하신 포인트: **Point 입니다.`
          : '회원 정보를 찾을 수 없습니다.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 2,
  },
  info: {
    textAlign: 'center',
    margin: 10,
    color: '#666',
    fontSize: 14,
  },
});
