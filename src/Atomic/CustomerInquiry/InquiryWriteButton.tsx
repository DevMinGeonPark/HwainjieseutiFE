import {Button, Center} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InquiryWriteButton() {
  return (
    <Center>
      <Button
        leftIcon={<Icon name="pencil" color="white" />}
        bg="black"
        _text={{color: 'white'}}
        rounded="none">
        글쓰기
      </Button>
    </Center>
  );
}
