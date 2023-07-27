// ColorModule.tsx
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {VStack, Center} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import Circles from '@src/Atomic/ProductCard/Circles';

type ColorModuleProps = {
  props: string | undefined;
};

export default function ColorModule(props: ColorModuleProps) {
  const colors = props.props?.match(/#[a-f0-9]{6}/g) || [];

  const names = props?.props?.match(/(?<=\^)[^,]+/g) || [];
  const [text, setText] = useState<string>('');
  const numInRow = 4;

  useEffect(() => {
    if (names.length > 0) {
      setText(names[0] || '');
    }
  }, [props.props]);

  const onCirclePress = (index: number) => {
    setText(names[index]);
  };

  // console.log(names);
  console.log(props.props);

  return (
    <Center>
      <FontHeading mb={7} size="md">
        색상 : {text}
      </FontHeading>
      <Circles color={colors} size={8} onCirclePress={onCirclePress} />
    </Center>
  );
}

const styles = StyleSheet.create({});
