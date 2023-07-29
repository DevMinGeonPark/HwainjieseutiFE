import React from 'react';
import {Box, Checkbox} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';

interface CheckBoxModuleProps {
  title: string;
  label: string;
}

export default function CheckBoxModule({title, label}: CheckBoxModuleProps) {
  return (
    <Box p={3}>
      <FontHeading fontSize={12}>{title}</FontHeading>
      <Checkbox defaultIsChecked value={''} my={2}>
        <FontHeading fontSize={12}>{label}</FontHeading>
      </Checkbox>
    </Box>
  );
}
