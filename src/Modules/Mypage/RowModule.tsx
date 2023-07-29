import React from 'react';
import {HStack} from 'native-base';
import RowItem from '@src/Atomic/MyPage/RowItem';

export default function RowModule() {
  // 데이터 형태를 본후 수정하기
  return (
    <HStack>
      <RowItem text="2023-07-29" />
      <RowItem text="100" />
      <RowItem text=" " />
      <RowItem text="37796" />
    </HStack>
  );
}
