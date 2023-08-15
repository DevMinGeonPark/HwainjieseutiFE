import {Button} from 'native-base';
import React from 'react';

interface RegisterNavigationButtonProps {
  title: string;
  handleSummit: () => void;
}

export default function RegisterNavigationButton({
  title,
  handleSummit,
}: RegisterNavigationButtonProps) {
  return (
    <Button
      mt={5}
      mx={3}
      bg="#333333"
      borderWidth={1}
      borderColor="black"
      size="xs"
      _text={{fontSize: 14, fontWeight: 'bold', color: 'white'}}
      onPress={handleSummit}>
      {title}
    </Button>
  );
}
