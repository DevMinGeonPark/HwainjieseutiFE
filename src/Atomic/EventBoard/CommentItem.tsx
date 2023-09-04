import {Box, HStack, Image} from 'native-base';
import {FontText} from '../FontText';
import React from 'react';
import {Images} from '@assets/imgs/Images';
import {FontHeading} from '../FontHeading';
import {useUserState} from '@src/contexts/UserContext';

interface CommentItemProps {
  Option: string;
  Blinder: string;
  Content: string;
  isCurrentUser: boolean;
}

export default function CommentItem({
  Option,
  Blinder,
  Content,
  isCurrentUser,
}: CommentItemProps) {
  if (Blinder === 'Y') {
    return (
      <Box px={3} flex={1}>
        <FontHeading fontSize={12}>블라인더 처리된 댓글입니다.</FontHeading>
      </Box>
    );
  } else if (Option === 'secret') {
    return (
      <HStack
        px={3}
        space={1}
        alignItems={isCurrentUser ? 'none' : 'center'}
        flex={1}>
        {Images.Event.Secret && (
          <Image
            style={{width: 10, height: 10}}
            source={Images.Event.Secret || ''}
            alt="notice"
            size={16}
          />
        )}
        <FontText fontSize={12}>
          {isCurrentUser ? Content : '댓글내용 확인'}
        </FontText>
      </HStack>
    );
  } else {
    return (
      <Box px={3} flex={1}>
        <FontText fontSize={12}>{Content}</FontText>
      </Box>
    );
  }
}
