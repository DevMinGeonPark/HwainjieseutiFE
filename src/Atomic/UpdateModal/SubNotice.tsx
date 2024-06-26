import {View, Text} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import {FontText} from '../FontText';

const SubNotice = () => {
  return (
    <Box>
      <FontText fontSize={18} color="black">
        스토어 이동 후 앱이 보이지 않으면
      </FontText>
      <FontText fontSize={18} color="black">
        휴대폰의 OS를 먼저 업데이트해주세요
      </FontText>
    </Box>
  );
};

export default React.memo(SubNotice);
