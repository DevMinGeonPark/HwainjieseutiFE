import React from 'react';
import Logos from './Footer/Logos';
import Copyrigth from './Footer/Copyrigth';
import {Center, HStack} from 'native-base';
import {FontText} from './FontText';

export default function InfoContainer() {
  return (
    <Center p={6}>
      <HStack flexWrap="wrap">
        <FontText fontSize={14}>회사명: </FontText>
        <FontText fontSize={14} fontWeight="bold">
          (주)화인지에스티
        </FontText>
        <FontText fontSize={14}> 대표자: 박근우</FontText>
      </HStack>
      <Center>
        <FontText fontSize={14}>
          주소: 서울특별시 강서구 마곡중앙로 59-21, 7층 707-710호(마곡동,
          에이스타워2)
        </FontText>
        <FontText>사업자번호: 119-81-88667</FontText>
        <FontText>통신판매업신고번호: 2020-서울강서-0419호</FontText>
        <HStack flexWrap="wrap">
          <FontText>이메일: </FontText>
          <FontText style={{fontWeight: 'bold'}}>fine@finegst.com</FontText>
        </HStack>
        <FontText>개인정보관리: 한경호</FontText>
        {/* codepush 변경부분 (확인용) */}
        <FontText>Version: 5.0.10</FontText>
      </Center>
      <Logos />
      <Copyrigth />
    </Center>
    // </View>
  );
}
