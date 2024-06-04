import React from 'react';
import {Box, Image, Pressable} from 'native-base';
import {Alert, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import AutoHeightImage from 'react-native-auto-height-image';
import {useUserState} from '@src/contexts/UserContext';
import {hasUserProperties} from '@src/Types/ContentTypes';

interface BannerProps {
  img?: string;
  imgUrl?: string;
}

export default function Banner({img, imgUrl}: BannerProps) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const [user] = useUserState();

  return (
    <Pressable
      onPress={() => {
        if (hasUserProperties(user) && imgUrl) {
          navigation.navigate('Event', {
            url: `https://kt-online.shop//${imgUrl}`,
          });
        } else {
          Alert.alert('로그인이 필요합니다.', '', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        }
      }}>
      {img && <AutoHeightImage width={width} source={{uri: img}} />}
    </Pressable>
  );
}
