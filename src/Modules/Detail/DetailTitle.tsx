import {Center, Divider} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import React from 'react';

interface DetailTitleProps {
  name: string;
}

export default function DetailTitle({name}: DetailTitleProps) {
  return (
    <Center my={8}>
      <FontHeading>{name}</FontHeading>
      <Divider mt="2" bg="muted.800" width={35} />
    </Center>
  );
}
