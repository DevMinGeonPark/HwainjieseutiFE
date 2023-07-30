import React from 'react';
import {Image} from 'native-base';
import {useWindowDimensions} from 'react-native';

interface BannerProps {
  img: string | undefined;
}

export default function Banner({img}: BannerProps) {
  const width = useWindowDimensions().width;

  if (!img) {
    return null;
  }

  return (
    <Image
      width={width}
      height={'100%'}
      resizeMode="cover"
      alt="MainImage"
      source={{uri: img}}
    />
  );
}
