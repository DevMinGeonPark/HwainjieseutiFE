import {View, Text} from 'react-native';
import React from 'react';
import {VStack} from 'native-base';
import {Comment} from '@src/Types/EventDataTypes';
import CommentBox from '@src/Modules/EventBoard/CommentBox';
import {useCRCommentState} from '@src/contexts/CRCommentModalContext';
import CRComment from '@src/Modules/EventBoard/CRComment';

interface CommentGroupProps {
  data: Comment[];
  EventIDX: string;
  CommentRefetch: () => void;
}

export type IdxGroup = {
  EventIDX: string;
  CommentPK: string;
  ReplyParentIDX: string;
};

const CommentGroup = ({data, EventIDX, CommentRefetch}: CommentGroupProps) => {
  const [showModal, setShowModal] = useCRCommentState();
  const [CRType, setCRType] = React.useState<'Create' | 'Edit'>('Create');

  const [content, setContent] = React.useState<string>(''); // 댓글 내용

  // 상태 유지
  const [CRCommentUid, setCRCommentUid] = React.useState<IdxGroup>({
    EventIDX: EventIDX,
    CommentPK: '0',
    ReplyParentIDX: '0',
  });

  const setCurrentState = (idxGroup: IdxGroup) => {
    setCRCommentUid(idxGroup);
  };

  return (
    <VStack>
      {data.map((item, index) => (
        <CommentBox
          key={index}
          Comment={item}
          marginLeft={item?.ReplyDepth.length * 6}
          setCRType={setCRType}
          CRCommentUid={CRCommentUid}
          setCurrentState={setCurrentState}
          CommentRefetch={CommentRefetch}
          setContent={setContent}
        />
      ))}
      <CRComment
        showModal={showModal}
        setShowModal={setShowModal}
        CRType={CRType}
        CRCommentUid={CRCommentUid}
        CommentRefetch={CommentRefetch}
        content={content}
        setContent={setContent}
      />
    </VStack>
  );
};

export default React.memo(CommentGroup);
