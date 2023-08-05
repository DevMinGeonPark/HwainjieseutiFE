import {FontText} from '@src/Atomic/FontText';
import React from 'react';

export default function SearchSubText() {
  return (
    <FontText fontSize={12}>
      검색범위을 선택하지 않거나, 상품가격을 입력하지 않으면 전체에서 검색합니
      검색어는 최대 30글자까지, 여러개의 검색어를 공백으로 구분하여 입력
      할수있습니다.
    </FontText>
  );
}
