import ColumnItem from '@src/Atomic/MyPage/ColumnItem';
import {HStack} from 'native-base';
import React from 'react';

export default function ColumnNames() {
  return (
    <HStack>
      <ColumnItem title="날짜" />
      <ColumnItem title="포인트받은 내역" />
      <ColumnItem title="사용내역" />
      <ColumnItem title="현재 남은 포인트" />
    </HStack>
  );
}
