import React from 'react';
import {Box, Image, Pressable} from 'native-base';
import {Alert, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import AutoHeightImage from 'react-native-auto-height-image';

interface BannerProps {
  img?: string;
  imgUrl?: string;
}

export default function Banner({img, imgUrl}: BannerProps) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  console.log('imgUrl', imgUrl);

  return (
    <Pressable
      onPress={() => {
        imgUrl
          ? navigation.navigate('Event', {
              url: `https://kt-online.shop/${imgUrl}`,
            })
          : Alert.alert('주소가 이상합니다.');
      }}>
      {img && <AutoHeightImage width={width} source={{uri: img}} />}
    </Pressable>
  );
}
