import {Center, Divider} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import ColorModule from '@src/Modules/Detail/ColorModule';
import React from 'react';

interface DetailInfoProps {
  productTitle: string;
  productColors: string;
}

export default function DetailInfo({
  productTitle,
  productColors,
}: DetailInfoProps) {
  return (
    <Center my={3}>
      <FontHeading size="md">{productTitle}</FontHeading>
      <Divider my="3" bg="muted.800" width={260} />
      <ColorModule props={productColors} />
    </Center>
  );
}
