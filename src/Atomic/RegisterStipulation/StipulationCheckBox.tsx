import {View, Text} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import {Checkbox} from 'native-base';
import {FontText} from '../FontText';

interface StipulationCheckBoxProps {
  title: string;
  check: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StipulationCheckBox({
  title,
  onChange,
  check,
}: StipulationCheckBoxProps) {
  return (
    <Box
      p={3}
      bg="#f5f5f5"
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="#CCC">
      <Checkbox value="agree" onChange={() => onChange(!check)}>
        <FontText ml={-1} fontSize={12}>
          {title}
        </FontText>
      </Checkbox>
    </Box>
  );
}
