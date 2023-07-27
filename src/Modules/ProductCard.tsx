import {useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Button, Center, Image} from 'native-base';
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
import {NameSelector} from '@src/Utils/NameSelector';

export default function ProductCard(data: ItemList) {
  const [color, setColor] = useState<string[]>();
  const width = useWindowDimensions().width;
  const cardMargin = 3;
  const pt = 5;
  const px = 3;

  const [heightControl, setHeightControl] = useState<number>(130);
  const [user] = useUserState();

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const routeParams = useRoute().params as any;

  const test = [];

  useEffect(() => {
    user ? setHeightControl(130) : setHeightControl(80);
    setColor(data.ItemColor.match(/#[a-f0-9]{6}/g) || []);
    SplashScreen.hide();
  }, []);

  return (
    <Box
      bg="white"
      // maxHeight={width / 2 + heightControl}
      // width를 2로 나누고 거기서 margin에 해당하는 부분을 빼면 된다.
      width={width / 2 - cardMargin * 2}
      borderColor="rgb(231, 231, 231)"
      borderWidth={1}
      rounded="3xl"
      style={{margin: cardMargin}}>
      <Box pt={pt} px={3}>
        <Center>
          {/* 이미지가 좀더 사이즈에 맞게변화할 수 있는 방법을 강구해보자. */}
          {data.ItemImgUrl && (
            <Image
              w={118}
              h={127}
              resizeMode="cover"
              alt="product img"
              source={{
                uri: data.ItemImgUrl,
              }}
            />
          )}
        </Center>
        <Box py={2}>
          <Center>
            <FontHeading fontSize={14}>{data.ItemName}</FontHeading>
          </Center>
          <Circles color={color || []} size={15} onCirclePress={() => {}} />
          {user && (
            <Price
              ItemChargeNormal={data?.ItemChargeNormal}
              ItemChargeSales={data?.ItemChargeSales}
              ItemDCRate={data?.ItemDCRate}
            />
          )}
          <Button
            mx={3}
            my={3}
            onPress={() =>
              navigation.navigate('Detail', {
                name: NameSelector(data.MenuVar),
                MenuType: data.MenuType,
                MenuVar: data.MenuVar,
                it_id: data.ItemCode,
                num: Math.random(),
              })
            }
            _text={{color: '#777', fontWeight: 'bold'}}
            _pressed={{
              _text: {
                color: 'coolGray.50',
              },
              bg: 'rose.500',
            }}
            rounded="3xl"
            bg="white"
            borderColor="#999"
            borderWidth={1}>
            자세히보기
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
