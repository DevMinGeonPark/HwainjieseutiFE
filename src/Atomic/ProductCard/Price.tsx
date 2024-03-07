import React from 'react';
import {HStack, Center} from 'native-base';
import {PriceType} from '@Types/MainDataTypes';
import {FontHeading} from '../FontHeading';
import {FontText} from '../FontText';

export default function Price(data: PriceType) {
  return (
    <Center>
      <FontHeading fontSize={14}>{data.ItemDCRate}% DC</FontHeading>
      <HStack space={3}>
        <FontText fontSize={13} color="#888" strikeThrough>
          {data.ItemChargeNormal.toLocaleString()}
        </FontText>
        <FontHeading fontSize={14} color={'red.600'}>
          ￦ {data.ItemChargeSales.toLocaleString()}
        </FontHeading>
      </HStack>
    </Center>
  );
}
