import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {FontText} from './FontText';
import {Box, HStack, Pressable} from 'native-base';

export default function AdCopy() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  return (
    <HStack p={3} justifyContent="space-between">
      <FontText fontSize={14}> KT화인지에스티 회원 전용 App </FontText>
      <HStack>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <FontText>로그인</FontText>
        </Pressable>
        <FontText> | </FontText>
        <Pressable onPress={() => {}}>
          <FontText>회원가입</FontText>
        </Pressable>
      </HStack>
    </HStack>
  );
}
