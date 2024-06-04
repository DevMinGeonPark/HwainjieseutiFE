import {Alert, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState} from 'react';
import {ImgMainRoll} from '@src/Types/MainDataTypes';
import {Pressable, Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

import AutoHeightImage from 'react-native-auto-height-image';
import {useUserState} from '@src/contexts/UserContext';
import {hasUserProperties} from '@src/Types/ContentTypes';

interface Props {
  imgs: ImgMainRoll[];
}

export default function CarouselView({imgs}: Props) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const [user] = useUserState();

  const [height, setHeight] = useState<number>(0);

  return (
    <Carousel
      loop
      width={width}
      height={height} // 288은 임의의 값이기 때문에 에러 가능성 있음
      autoPlay={true}
      data={imgs ? imgs : []}
      scrollAnimationDuration={1000}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
      renderItem={({item, index}) => (
        <Pressable
          key={index}
          onPress={() => {
            if (hasUserProperties(user)) {
              item.imgurl
                ? navigation.navigate('Event', {url: item.imgurl})
                : navigation.navigate('Event');
            } else {
              Alert.alert('로그인이 필요합니다.', '', [
                {text: 'OK', onPress: () => navigation.navigate('Login')},
              ]);
            }
          }}>
          {item.imgsrc && (
            <AutoHeightImage
              onHeightChange={height => {
                setHeight(height);
              }}
              width={width}
              source={{uri: item.imgsrc}}
            />
          )}
        </Pressable>
      )}
    />
  );
}
