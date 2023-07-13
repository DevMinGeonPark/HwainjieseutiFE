import {Dimensions, Image, View, StyleSheet, Pressable} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState} from 'react';
import {
  ImgMainRoll,
  ImgMainSub,
  ItemBestList,
  ItemNewList,
} from '@src/Types/MainDataTypes';

interface Props {
  props: ImgMainRoll[] | undefined;
}

export default function CarouselView(props: Props) {
  const width = Dimensions.get('window').width;

  const data = props.props?.map((item: ImgMainRoll) => {
    return item;
  });

  return (
    <>
      <Carousel
        loop
        width={width}
        height={377}
        autoPlay={true}
        // data={[...new Array(6).keys()]}
        data={data ? data : []}
        scrollAnimationDuration={1000}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item, index}) => (
          <Pressable onPress={() => console.log(item.imgsrc)}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              source={{uri: item.imgsrc}}
            />
          </Pressable>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({});
