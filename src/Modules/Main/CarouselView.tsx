import {Alert, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState} from 'react';
import {ImgMainRoll} from '@src/Types/MainDataTypes';
import {Pressable, Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

interface Props {
  props: ImgMainRoll[] | undefined;
}

export default function CarouselView(props: Props) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

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
            item.imgurl.match(/wr_id=(\d+)/)?.[1]
              ? navigation.navigate('EventBorad', {
                  Uid: Number(item.imgurl.match(/wr_id=(\d+)/)?.[1]) || 0,
                })
              : navigation.navigate('Event', {
                  MenuType: 'bo_table',
                  MenuVar: 'free',
                });
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
