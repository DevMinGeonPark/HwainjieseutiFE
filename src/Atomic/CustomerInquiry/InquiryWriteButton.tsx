import {Button, Center} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

export default function InquiryWriteButton() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  return (
    <Center mt={5}>
      <Button
        leftIcon={<Icon name="pencil" color="white" />}
        bg="black"
        _text={{color: 'white'}}
        rounded="none"
        onPress={() => navigation.navigate('WriteQnA', {QNAID: ''})}>
        글쓰기
      </Button>
    </Center>
  );
}
