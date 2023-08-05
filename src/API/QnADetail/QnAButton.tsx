import {Button} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface QnAMutationButtonProps {
  title: string;
  icon: string;
  onPress: () => void;
}

export default function QnAButton({
  title,
  icon,
  onPress,
}: QnAMutationButtonProps) {
  const size = 10;
  return (
    <Button
      bg="#333333"
      rounded="none"
      borderWidth={1}
      borderColor="black"
      size={'xs'}
      leftIcon={<Icon name={icon} size={size} color="white" />}
      _text={{fontSize: size, fontWeight: 'bold', color: 'white'}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
