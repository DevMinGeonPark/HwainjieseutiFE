import {View, Text, useWindowDimensions, Pressable} from 'react-native';
import React from 'react';
import {Heading, Center} from 'native-base';
import RenderHTML from 'react-native-render-html';
import {FontHeading} from '@src/Atomic/FontHeading';

interface InfoTabProps {
  html: string;
  infoTabSetter: boolean;
  setInfoTabSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InfoTab({
  html,
  infoTabSetter,
  setInfoTabSetter,
}: InfoTabProps) {
  const width = useWindowDimensions().width;
  return (
    <>
      <Pressable onPress={() => setInfoTabSetter(true)}>
        <Center bg={infoTabSetter ? '#dddddd' : 'white'}>
          <FontHeading p={3} size="lg">
            구매해택
          </FontHeading>
        </Center>
      </Pressable>
      <Pressable onPress={() => setInfoTabSetter(false)}>
        <Center bg={infoTabSetter ? 'white' : '#dddddd'}>
          <FontHeading p={3} size="lg">
            공통유의사항
          </FontHeading>
        </Center>
      </Pressable>
      <RenderHTML
        contentWidth={width}
        source={{
          html: html || '',
        }}
      />
    </>
  );
}
