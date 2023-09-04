import {View, Text, Alert} from 'react-native';
import React from 'react';
import {HStack, Pressable} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {useCRCommentState} from '@src/contexts/CRCommentModalContext';
import CRComment from '@src/Modules/EventBoard/CRComment';
import {IdxGroup} from '@Modules/EventBoard/CommentGroup';
import {useUserState} from '@src/contexts/UserContext';
import useDeleteComment from '@src/hooks/queryHooks/useDeleteComment';

interface CommentCURDProps {
  setCRType: (CRType: 'Create' | 'Edit') => void;
  setCurrentState: (idxGroup: IdxGroup) => void;
  idxGroupData: IdxGroup;
  CommentRefetch: () => void;
  modifyContent: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  commentUser: string;
}

export default function CommentCURD({
  setCRType,
  setCurrentState,
  idxGroupData,
  CommentRefetch,
  modifyContent,
  setContent,
  commentUser,
}: CommentCURDProps) {
  const [, setShowModal] = useCRCommentState();
  const [user] = useUserState();

  const deleteCommentMutation = useDeleteComment();

  const onPress = (CRType: 'Create' | 'Edit') => {
    setShowModal(true);
    setCRType(CRType);
    if (CRType === 'Edit') setContent(modifyContent);
    setCurrentState(idxGroupData);
  };

  const deleteComment = async () => {
    await deleteCommentMutation.mutateAsync({
      ReplyIDX: idxGroupData.CommentPK,
      KTShopID: user?.UserId || '',
    });
    CommentRefetch();
  };

  return (
    <HStack>
      <Pressable
        onPress={() => onPress('Create')}
        mr={user?.UserId === commentUser ? 2 : 0}>
        <FontText fontSize={12}>답글</FontText>
      </Pressable>
      {user?.UserId === commentUser && (
        <HStack space={2}>
          <Pressable onPress={() => onPress('Edit')}>
            <FontText fontSize={12}>수정</FontText>
          </Pressable>
          <Pressable
            onPress={() => {
              Alert.alert('삭제 확인', '정말로 이 댓글을 삭제하시겠습니까?', [
                {
                  text: '취소',
                  onPress: () => console.log('삭제 취소'),
                  style: 'cancel',
                },
                {
                  text: '확인',
                  onPress: () => deleteComment(),
                },
              ]);
            }}>
            <FontText fontSize={12}>삭제</FontText>
          </Pressable>
        </HStack>
      )}
    </HStack>
  );
}
