import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState} from 'react';
import {ImgMainRoll} from '@src/Types/MainDataTypes';
import {Pressable, Image} from 'native-base';

interface Props {
  props: ImgMainRoll[] | undefined;
}

export default function CarouselView(props: Props) {
  const width = useWindowDimensions().width;
  return (
    <Carousel
      loop
      width={width}
      height={377}
      autoPlay={true}
      data={props.props ? props.props : []}
      scrollAnimationDuration={1000}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
      renderItem={({item, index}) => (
        <Pressable
          key={index}
          onPress={() => {
            console.log(item.imgurl);
          }}>
          {item.imgsrc && (
            <Image
              width={width}
              height={'100%'}
              resizeMode="cover"
              alt="MainBannerCarousel"
              source={{uri: item.imgsrc}}
            />
          )}
        </Pressable>
      )}
    />
  );
}