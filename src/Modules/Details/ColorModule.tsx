import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Circle, HStack, Heading} from 'native-base';

type ColorModuleProps = {
  props: string | undefined;
};

export default function ColorModule(props: ColorModuleProps) {
  const colors = props.props?.match(/#[a-f0-9]{6}/g) || [];
  const names = props?.props?.match(/(?<=\^)[가-힣]+/g) || [];
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (names.length > 0) {
      setText(names[0] || '');
    }
  }, [props.props]);

  return (
    <>
      <Heading mb={7} size="md">
        색상 : {text}
      </Heading>
      <HStack space={2}>
        {colors?.map((color, index) => (
          <Pressable key={index} onPress={() => setText(names[index])}>
            <Circle size={8} bg={color} key={index} />
          </Pressable>
        ))}
      </HStack>
    </>
  );
}

const styles = StyleSheet.create({});
