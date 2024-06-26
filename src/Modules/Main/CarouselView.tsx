import {Alert, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState} from 'react';
import {ImgMainRoll} from '@src/Types/MainDataTypes';
import {Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useUserStore} from '@src/Store/userStore';
import AutoHeightImage from 'react-native-auto-height-image';
import SplashScreen from 'react-native-splash-screen';

interface Props {
  imgs: ImgMainRoll[];
}

function CarouselView({imgs}: Props) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const {hasUser} = useUserStore();
  const [height, setHeight] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(imgs.length).fill(false),
  );

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    // 모든 이미지가 로딩되었는지 확인
    if (loadedImages.every(loaded => loaded) && !allImagesLoaded) {
      // 모든 이미지 로딩 완료 시 실행할 기능
      console.log('All images are loaded!');
      SplashScreen.hide();
      setAllImagesLoaded(true);
    }
  };

  return (
    <Carousel
      loop
      width={width}
      height={height}
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
            item.imgurl
              ? navigation.navigate('Event', {url: item.imgurl})
              : navigation.navigate('Event');
          }}>
          {item.imgsrc && (
            <AutoHeightImage
              onHeightChange={height => {
                setHeight(height);
              }}
              onLoad={() => handleImageLoad(index)}
              width={width}
              source={{uri: item.imgsrc}}
            />
          )}
        </Pressable>
      )}
    />
  );
}

export default React.memo(CarouselView);
