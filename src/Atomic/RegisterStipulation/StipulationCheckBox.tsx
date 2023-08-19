import {View, Text} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import {Checkbox} from 'native-base';
import {FontText} from '../FontText';

interface StipulationCheckBoxProps {
  title: string;
}

export default function StipulationCheckBox({title}: StipulationCheckBoxProps) {
  return (
    <Box
      p={3}
      bg="#f5f5f5"
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="#CCC">
      <Checkbox value="agree">
        <FontText ml={-1} fontSize={12}>
          {title}
        </FontText>
      </Checkbox>
    </Box>
  );
}
