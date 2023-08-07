import {Pressable} from 'react-native';
import React from 'react';
import {Center} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import AutoHeightImage from 'react-native-auto-height-image';
import {useWindowDimensions} from 'react-native';

interface InfoTabProps {
  BuyBenefit: string;
  CommAttn: string;
}

export default function InfoTab({BuyBenefit, CommAttn}: InfoTabProps) {
  const [infoTabSetter, setInfoTabSetter] = React.useState<boolean>(true);
  const width = useWindowDimensions().width;

  return (
    <>
      <Pressable onPress={() => setInfoTabSetter(true)}>
        <Center bg={infoTabSetter ? 'white' : '#dddddd'}>
          <FontHeading p={3} size="lg">
            구매해택
          </FontHeading>
        </Center>
      </Pressable>
      <Pressable onPress={() => setInfoTabSetter(false)}>
        <Center bg={infoTabSetter ? '#dddddd' : 'white'}>
          <FontHeading p={3} size="lg">
            공통유의사항
          </FontHeading>
        </Center>
      </Pressable>
      {infoTabSetter
        ? BuyBenefit && (
            <AutoHeightImage width={width} source={{uri: BuyBenefit || ''}} />
          )
        : CommAttn && (
            <AutoHeightImage width={width} source={{uri: CommAttn || ''}} />
          )}
    </>
  );
}
