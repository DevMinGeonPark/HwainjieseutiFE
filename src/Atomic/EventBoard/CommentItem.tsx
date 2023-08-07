import {Box, HStack, Image} from 'native-base';
import {FontText} from '../FontText';
import React from 'react';
import {Images} from '@assets/imgs/Images';
import {FontHeading} from '../FontHeading';

interface CommentItemProps {
  Option: string;
  Blinder: string;
  Content: string;
}

export default function CommentItem({
  Option,
  Blinder,
  Content,
}: CommentItemProps) {
  if (Blinder === 'Y') {
    return (
      <Box px={3}>
        <FontHeading fontSize={12}>블라인더 처리된 댓글입니다.</FontHeading>
      </Box>
    );
  } else if (Option === 'secret') {
    return (
      <HStack px={3} space={1} alignItems="center">
        {Images.Event.Secret && (
          <Image
            style={{width: 10, height: 10}}
            source={Images.Event.Secret || ''}
            alt="notice"
            size={16}
          />
        )}
        <FontText fontSize={12}>댓글내용 확인</FontText>
      </HStack>
    );
  } else {
    return (
      <Box px={3}>
        <FontText>{Content}</FontText>
      </Box>
    );
  }
}
