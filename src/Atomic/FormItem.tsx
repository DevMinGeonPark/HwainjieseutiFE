import {Box, Input} from 'native-base';
import React from 'react';
import {FontHeading} from './FontHeading';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FormItemProps {
  title: string;
  isDisabled: boolean;
  type?: 'text' | 'password';
  icon?: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormItem({
  title,
  isDisabled,
  type,
  icon,
  text,
  setText,
}: FormItemProps) {
  return (
    <Box>
      <FontHeading fontSize={14} pb={2}>
        {title}
      </FontHeading>
      <Input
        autoCapitalize="none"
        value={text}
        isDisabled={isDisabled}
        bg={isDisabled ? '#EEEEEE' : '#FFFFFF'}
        InputRightElement={
          <Box mr={3}>
            {icon && <Icon name={icon} size={14} color="black" />}
          </Box>
        }
        onChangeText={text => setText(text)}
        type={type}
      />
    </Box>
  );
}
