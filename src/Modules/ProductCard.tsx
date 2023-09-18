import {useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Center, Image, Pressable} from 'native-base';
import {ItemList} from '@Types/MainDataTypes';
import Price from '@src/Atomic/ProductCard/Price';
import {useUserState} from '@src/contexts/UserContext';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useRoute} from '@react-navigation/native';
import Circles from '@src/Atomic/ProductCard/Circles';
import {FontHeading} from '@src/Atomic/FontHeading';
import ToDetailButton from '@src/Atomic/ProductCard/ToDetailButton';
import {NameSelector} from '@src/Utils/NameSelector';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {Alert} from 'react-native';
import {hasUserProperties} from '@src/Types/ContentTypes';

export default function ProductCard(data: ItemList) {
  const [color, setColor] = useState<string[]>();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [user] = useUserState();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const routeName = useRoute().name;
  const width = useWindowDimensions().width;
  const cardMargin = 3;

  useEffect(() => {
    setColor(data.ItemColor.match(/#[a-f0-9]{6}/g) || []);
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setIsPressed(false);
  }, [routeName]);

  return (
    <Pressable
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      onPress={() => {
        hasUserProperties(user)
          ? navigation.navigate('Detail', {
              name: NameSelector(data.MenuVar),
              MenuType: data.MenuType,
              MenuVar: data.MenuVar,
              it_id: data.ItemCode,
              num: Math.random(),
            })
          : Alert.alert('로그인이 필요합니다.');
      }}
      p={2}
      bg="white"
      // width를 2로 나누고 거기서 margin에 해당하는 부분을 빼면 된다.
      width={width / 2 - cardMargin * 2}
      borderColor="rgb(231, 231, 231)"
      borderWidth={1}
      rounded="3xl"
      style={{margin: cardMargin}}>
      <Box pt={4}>
        <Center>
          {data.ItemImgUrl && (
            <Image
              width={{base: '118px', md: '150px'}}
              height={{base: '127px', md: '150px'}}
              resizeMode="cover"
              alt="product img"
              source={{
                uri: data.ItemImgUrl || '',
              }}
            />
          )}
        </Center>
        <Box pt={3}>
          <Center>
            <FontHeading fontSize={14}>{data.ItemName}</FontHeading>
          </Center>
          <Circles color={color || []} size={15} onCirclePress={() => {}} />
          {hasUserProperties(user) && (
            <Price
              ItemChargeNormal={data?.ItemChargeNormal}
              ItemChargeSales={data?.ItemChargeSales}
              ItemDCRate={data?.ItemDCRate}
            />
          )}
          <ToDetailButton isPressed={isPressed} />
        </Box>
      </Box>
    </Pressable>
  );
}
