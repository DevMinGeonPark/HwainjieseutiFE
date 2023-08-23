import {Center, Divider, Box, Image} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import React, {useEffect, useState} from 'react';
import {ItemColor} from '@src/Types/DetailTypes';
import Circles from '@src/Atomic/ProductCard/Circles';
import {useWindowDimensions} from 'react-native';

interface DetailInfoProps {
  productTitle: string;
  data: ItemColor[];
}

export default function DetailInfo({productTitle, data}: DetailInfoProps) {
  const [text, setText] = useState<string>(''); //색상이름
  const [imgUrl, setImgUrl] = useState<string>(''); //색상이미지
  const width = useWindowDimensions().width;

  useEffect(() => {
    setText(data[0].ColorName);
    setImgUrl(data[0].ColorImg);
  }, []);

  const onCirclePress = (index: number) => {
    setText(data[index].ColorName);
    setImgUrl(data[index].ColorImg);
  };

  return (
    <Box my={3}>
      {imgUrl && imgUrl.endsWith('.jpg') && (
        <Image source={{uri: imgUrl}} alt="product" size={width} />
      )}
      <Center>
        <FontHeading size="md">{productTitle}</FontHeading>
        <Divider my="3" bg="muted.800" width={260} />
        <FontHeading mb={7} size="md">
          색상 : {text}
        </FontHeading>
        <Circles
          color={data.map(item => item.ColorRGB)}
          size={8}
          onCirclePress={onCirclePress}
        />
      </Center>
    </Box>
  );
}
