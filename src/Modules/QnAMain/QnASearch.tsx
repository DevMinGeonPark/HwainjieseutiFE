import {FontText} from '@src/Atomic/FontText';
import {Box, Input, Button, HStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ParamProps} from '@src/Types/QnAMainTypes';

interface QnASearchProps {
  setParams: React.Dispatch<React.SetStateAction<ParamProps>>;
}

export default function QnASearch({setParams}: QnASearchProps) {
  const [searchStr, setSearchStr] = React.useState<string>('');

  const onSummit = () => {
    setParams(prev => ({...prev, SearchStr: searchStr}));
  };

  return (
    <HStack
      space={2}
      my={5}
      p={4}
      bg="#fafafa"
      borderWidth={1}
      borderColor="#ddd">
      <Input
        flex={2}
        rounded="none"
        placeholder="검색어"
        bg="white"
        InputLeftElement={
          <Button
            variant={'ghost'}
            rounded="none"
            borderRightColor="muted.300"
            borderRightWidth={1}
            bg="#eeeeee">
            <Icon name="search" size={15} color="black" />
          </Button>
        }
        onChangeText={newStr => setSearchStr(newStr)}
      />
      <Button
        flex={1}
        variant={'ghost'}
        rounded="none"
        bg="#333"
        leftIcon={<Icon name="search" size={12} color="white" />}
        borderRightColor="muted.300"
        _text={{fontSize: 12, color: 'white'}}
        borderRightWidth={1}
        onPress={onSummit}>
        검색
      </Button>
    </HStack>
  );
}
