import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {FontText} from './FontText';
import {Box, HStack, Pressable} from 'native-base';
import {FontHeading} from './FontHeading';
import {useUserStore} from '@src/Store/userStore';

function AdCopy() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const {hasUser} = useUserStore();

  return (
    <HStack
      p={3}
      justifyContent="space-between"
      borderBottomColor="#CCC"
      borderBottomWidth={1}>
      <HStack alignItems="center">
        <FontText fontSize={14}> KT화인지에스티 </FontText>
        <FontHeading fontSize={14} color="#f00">
          회원 전용 App
        </FontHeading>
      </HStack>
      {!hasUser() && (
        <HStack>
          <Pressable onPress={() => navigation.push('Login')}>
            <FontText>로그인</FontText>
          </Pressable>
          <FontText> | </FontText>
          <Pressable
            onPress={() => {
              navigation.navigate('WebRegister');
            }}>
            <FontText>회원가입</FontText>
          </Pressable>
        </HStack>
      )}
    </HStack>
  );
}
export default memo(AdCopy);
