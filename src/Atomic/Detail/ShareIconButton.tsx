import React from 'react';
import {Center, Image, Pressable} from 'native-base';
import {Images} from '@assets/imgs/Images';
import {FontText} from '../FontText';
import {ImageSourcePropType} from 'react-native';

interface ShareIconButtonProps {
  image: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

export default function ShareIconButton({
  image,
  label,
  onPress,
}: ShareIconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Center>
        {image && (
          <Image
            source={image}
            alt="ShareIconButtons"
            width={100}
            height={100}
            resizeMode="contain"
          />
        )}
        <FontText m={1} fontSize={14}>
          {label}
        </FontText>
      </Center>
    </Pressable>
  );
}
