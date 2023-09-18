import {Button, Modal, TextArea, Checkbox} from 'native-base';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRef} from 'react';
import useWriteComment from '@src/hooks/queryHooks/useWriteComment';
import {WriteParamProps} from '@src/Types/EventDataTypes';
import {useUserState} from '@src/contexts/UserContext';
import {IdxGroup} from './CommentGroup';
import {FontText} from '@src/Atomic/FontText';
import {TextInput} from 'react-native';
import useModifyComment from '@src/hooks/queryHooks/useModifyComment';

interface CRCommentProps {
  showModal: boolean | undefined;
  setShowModal: (CRStateType: boolean | undefined) => void;
  CRType: 'Create' | 'Edit';
  CRCommentUid: IdxGroup;
  CommentRefetch: () => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function CRComment({
  showModal,
  setShowModal,
  CRType,
  content,
  setContent,
  CRCommentUid,
  CommentRefetch,
}: CRCommentProps) {
  const [isChecked, setIsChecked] = React.useState(false); // 체크박스 상태 관리

  const [user] = useUserState();

  const textAreaRef = useRef<any>(null);

  const writeCommentMutation = useWriteComment();

  const modifyCommentMutation = useModifyComment();

  const writeComment = async (contents: string) => {
    await writeCommentMutation.mutateAsync({
      EventIDX: CRCommentUid.EventIDX,
      ReplyParentIDX: CRCommentUid.CommentPK,
      Content: contents,
      Secret: isChecked ? 'Y' : 'N',
      KTShopID: user?.UserId || '',
    } as WriteParamProps);
    CommentRefetch();
  };

  const modifyComment = async (contents: string) => {
    await modifyCommentMutation.mutateAsync({
      ReplyIDX: CRCommentUid.CommentPK,
      Content: contents,
      Secret: isChecked ? 'Y' : 'N',
      KTShopID: user?.UserId || '',
    });
    CommentRefetch();
  };

  useEffect(() => {
    if (!showModal && textAreaRef.current) {
      textAreaRef.current.clear();
      setContent('');
    }
  }, [showModal]);

  return (
    <Modal
      p={4}
      size="full"
      isOpen={showModal}
      onClose={() => setShowModal(false)}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>
          {CRType === 'Create' ? '댓글작성' : '댓글수정'}
        </Modal.Header>
        <Modal.Body>
          <TextArea
            value={content}
            ref={textAreaRef}
            placeholder="내용을 입력해주세요."
            onChangeText={text => setContent(text)}
            autoCompleteType={undefined}
          />
          <Checkbox
            my={2}
            value="agree"
            onChange={() => setIsChecked(!isChecked)}>
            <FontText ml={-1} fontSize={12}>
              비밀글
            </FontText>
          </Checkbox>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}>
              Cancel
            </Button>
            <Button
              leftIcon={<Icon name="comment" color="white" />}
              bg="black"
              _text={{color: 'white'}}
              rounded="none"
              onPress={() => {
                CRType === 'Create'
                  ? writeComment(content || '')
                  : modifyComment(content || '');

                setShowModal(false);
              }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
