import React from 'react';
import {Box, VStack} from 'native-base';
import {FontHeading} from '../FontHeading';

const MainNotice = () => {
  return (
    <VStack space={2}>
      <FontHeading fontSize={30} color="black">
        새로운 버전이
      </FontHeading>
      <FontHeading fontSize={30} color="black">
        업데이트 되었어요
      </FontHeading>
    </VStack>
  );
};

export default MainNotice;
