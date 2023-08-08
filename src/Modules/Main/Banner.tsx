import React from 'react';
import {Image, Pressable} from 'native-base';
import {Alert, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

interface BannerProps {
  img?: string;
  imgUrl?: string;
}

export default function Banner({img, imgUrl}: BannerProps) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  if (imgUrl === undefined) {
    return (
      <Image
        width={width}
        height={'100%'}
        resizeMode="cover"
        alt="MainImage"
        source={{uri: img || ''}}
      />
    );
  }

  return (
    <Pressable
      onPress={() => {
        console.log(imgUrl);
        console.log(imgUrl?.match(/wr_id=(\d+)/)?.[1]);
        imgUrl?.match(/wr_id=(\d+)/)?.[1]
          ? navigation.navigate('EventBorad', {
              Uid: Number(imgUrl?.match(/wr_id=(\d+)/)?.[1]) || 0,
            })
          : Alert.alert('주소가 이상합니다.');
      }}>
      <Image
        width={width}
        height={'100%'}
        resizeMode="cover"
        alt="MainImage"
        source={{uri: img}}
      />
    </Pressable>
  );
}
