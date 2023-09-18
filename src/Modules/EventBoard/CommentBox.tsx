import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {Comment} from '@src/Types/EventDataTypes';
import {Circle, HStack, VStack, Box, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimeItem from '@src/Atomic/EventBoard/DateTimeItem';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import CommentItem from '@src/Atomic/EventBoard/CommentItem';
import CommentCURD from '@src/Atomic/EventBoard/CommentCURD';
import {IdxGroup} from './CommentGroup';
import {useUserState} from '@src/contexts/UserContext';

interface CommentBoxProps {
  Comment: Comment | undefined;
  marginLeft: number;
  setCRType: (CRType: 'Create' | 'Edit') => void;
  CRCommentUid: IdxGroup;
  setCurrentState: (idxGroup: IdxGroup) => void;
  CommentRefetch: () => void;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function CommentBox({
  Comment,
  marginLeft,
  setCRType,
  CRCommentUid,
  setCurrentState,
  CommentRefetch,
  setContent,
}: CommentBoxProps) {
  const width = useWindowDimensions().width;
  const idxGroupData = {
    EventIDX: CRCommentUid?.EventIDX || '0',
    CommentPK: Comment?.IDX || '0',
    ReplyParentIDX: Comment?.ReplyIDX || '0',
  } as IdxGroup;
  const [user] = useUserState();

  return (
    <HStack
      p={3}
      pl={marginLeft == 0 ? 3 : marginLeft}
      maxWidth={width - marginLeft}
      alignItems="center"
      borderBottomColor="#ddd"
      borderBottomWidth={1}>
      <Circle size="md" bg="#F5F5F5">
        <Icon name="user" size={30} color="#8F8F8F" />
      </Circle>
      <VStack flex={1} space={1}>
        <HStack px={3} justifyContent="space-between" space={2}>
          <HStack space={2} alignItems="center">
            <FontHeading fontSize={13}>{Comment?.UserNm}</FontHeading>
            <DateTimeItem Date={Comment?.WriteDate || ''} />
          </HStack>
          <CommentCURD
            setCRType={setCRType}
            setCurrentState={setCurrentState}
            idxGroupData={idxGroupData}
            CommentRefetch={CommentRefetch}
            modifyContent={Comment?.Content || ''}
            setContent={setContent}
            commentUser={Comment?.UserID || ''}
          />
        </HStack>
        {/* <Container px={3} flex={1} flexWrap="wrap">
          <FontText fontSize={12}>
            {user?.}
            {Comment?.Content}
          </FontText>
        </Container> */}
        <CommentItem
          Option={Comment?.Option || ''}
          Blinder={Comment?.Blinder || ''}
          Content={Comment?.Content || ''}
          isCurrentUser={user?.UserId === Comment?.UserID}
        />
      </VStack>
    </HStack>
  );
}
