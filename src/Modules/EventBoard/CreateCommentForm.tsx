import {Center, TextArea, Checkbox, HStack, Button, Spacer} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {FontText} from '@src/Atomic/FontText';
import Icon from 'react-native-vector-icons/FontAwesome';
import useWriteComment from '@src/hooks/queryHooks/useWriteComment';
import {WriteParamProps} from '@src/Types/EventDataTypes';
import {useUserState} from '@src/contexts/UserContext';
import {useToast} from 'native-base';

interface CreateCommentFormProps {
  EventIDX: string;
  CommentRefetch: () => void;
}

export default function CreateCommentForm({
  EventIDX,
  CommentRefetch,
}: CreateCommentFormProps) {
  const [content, setContent] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false); // 체크박스 상태 관리
  const [user] = useUserState();
  const toast = useToast();

  const textAreaRef = useRef<any>(null);

  const writeCommentMutation = useWriteComment();

  useEffect(() => {
    textAreaRef.current.clear();
  }, []);

  const writeComment = async (contents: string) => {
    await writeCommentMutation.mutateAsync({
      EventIDX: EventIDX,
      ReplyParentIDX: '', //신규(공백)
      Content: contents,
      Secret: isChecked ? 'Y' : 'N',
      KTShopID: user?.UserId || '',
    } as WriteParamProps);
    textAreaRef.current.clear();
    await CommentRefetch();
    toast.show({title: '댓글이 등록되었습니다.'});
  };

  return (
    <Center mt={3} p={5} borderWidth={1} borderColor="#ddd">
      <TextArea
        value={content}
        ref={textAreaRef}
        placeholder="내용을 입력해주세요."
        onChangeText={text => setContent(text)}
        autoCompleteType={undefined}
      />
      <HStack my={2} justifyContent="space-between">
        <Checkbox
          my={2}
          value="agree"
          onChange={() => setIsChecked(!isChecked)}>
          <FontText ml={-1} fontSize={12}>
            비밀글
          </FontText>
        </Checkbox>
        <Spacer />

        <Button
          leftIcon={<Icon name="comment" color="white" />}
          bg="black"
          size="sm"
          _text={{color: 'white'}}
          rounded="none"
          onPress={() => {
            writeComment(content);
          }}>
          Save
        </Button>
      </HStack>
    </Center>
  );
}
