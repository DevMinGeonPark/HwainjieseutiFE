import {Box} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Notice() {
  return (
    <Box p={4} bg="#d9edf7">
      <FontText color="#31708f" fontWeight="bold" fontSize={12}>
        <Icon name="exclamation-circle" size={12} color="#31708f" />
        회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입을 하실
        수 있습니다.
      </FontText>
    </Box>
  );
}
