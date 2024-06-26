import {Platform, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Center, Image, Pressable} from 'native-base';
import {ItemList} from '@Types/MainDataTypes';
import Price from '@src/Atomic/ProductCard/Price';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useRoute} from '@react-navigation/native';
import Circles from '@src/Atomic/ProductCard/Circles';
import {FontHeading} from '@src/Atomic/FontHeading';
import ToDetailButton from '@src/Atomic/ProductCard/ToDetailButton';
import {NameSelector} from '@src/Utils/NameSelector';
import {Alert} from 'react-native';
import {useUserStore} from '@src/Store/userStore';
import SplashScreen from 'react-native-splash-screen';

function ProductCard(data: ItemList) {
  const [color, setColor] = useState<string[]>();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const {hasUser} = useUserStore();
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
        // ios 이거나 로그인이 되어있으면
        if (Platform.OS === 'ios' || hasUser()) {
          navigation.navigate('Detail', {
            name: NameSelector(data.MenuVar),
            MenuType: data.MenuType,
            MenuVar: data.MenuVar,
            it_id: data.ItemCode,
            num: Math.random(),
          });
        } else {
          // 안드로이드이고 로그인이 안되어있으면
          Alert.alert('로그인이 필요합니다.', '', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        }
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
          {hasUser() && (
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

export default ProductCard;
