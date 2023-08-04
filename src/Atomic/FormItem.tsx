import {Box, Input} from 'native-base';
import React from 'react';
import {FontHeading} from './FontHeading';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FormItemProps {
  title: string;
  data: string;
  isDisabled: boolean;
  type?: 'text' | 'password';
  icon?: string;
}

export default function FormItem({
  title,
  data,
  isDisabled,
  type,
  icon,
}: FormItemProps) {
  return (
    <Box>
      <FontHeading fontSize={14} pb={2}>
        {title}
      </FontHeading>
      <Input
        value={data}
        isDisabled={isDisabled}
        bg={isDisabled ? '#EEEEEE' : '#FFFFFF'}
        InputRightElement={
          <Box mr={3}>
            {icon && <Icon name={icon} size={14} color="black" />}
          </Box>
        }
        type={type}
      />
    </Box>
  );
}
