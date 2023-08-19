import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, VStack, HStack} from 'native-base';
import Names from '@src/Atomic/RegisterStipulation/Table/Names';
import Col from '@src/Atomic/RegisterStipulation/Table/Col';

const Table: React.FC = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="white">
      <Names />
      <VStack>
        <Col
          colItem={[
            '이용자 식별 및 본인여부 확인',
            '아이디, 이름, 비밀번호',
            '회원 탈퇴 시까지',
          ]}
        />
        <Col
          colItem={[
            '고객서비스 이용에 관한 통지, CS대응을 위한 이용자 식별',
            '연락처 (이메일, 휴대전화번호)',
            '회원 탈퇴 시까지',
          ]}
        />
      </VStack>
    </Box>
  );
};

export default Table;
