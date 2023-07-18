import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Button, Center, HStack, Circle} from 'native-base';
import {ItemList} from '@Types/MainDataTypes';
import Price from '@src/Atomic/CardItem/Price';
import {useUserState} from '@src/contexts/UserContext';

export default function ProductCard(data: ItemList) {
  const [color, setColor] = useState<string[]>();
  const width = Dimensions.get('window').width;
  const cardMargin = 3;
  // var heightControl = 130;
  const [heightControl, setHeightControl] = useState<number>(130);
  const [user, setUser] = useUserState();

  useEffect(() => {
    user ? setHeightControl(130) : setHeightControl(80);
    setColor(data.ItemColor.match(/#[a-f0-9]{6}/g) || []);
  }, []);

  return (
    <View style={{margin: cardMargin}}>
      <Box
        bg="white"
        maxWidth={width / 2}
        maxHeight={width / 2 + heightControl}
        // width를 2로 나누고 거기서 margin에 해당하는 부분을 빼면 된다.
        width={width / 2 - cardMargin * 2}
        height="100%"
        borderColor="rgb(231, 231, 231)"
        borderWidth={1}
        rounded="3xl">
        <View style={{paddingTop: 25, paddingHorizontal: 15}}>
          <Center w={118} h={127}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                marginLeft: 30,
              }}
              source={{
                uri: data.itemImgUrl,
              }}
            />
          </Center>
          {/* </View> */}
          <View style={{paddingVertical: 10}}>
            <Center>
              <Text style={{fontWeight: 'bold', fontSize: 13}}>
                {data.itemName}
              </Text>
            </Center>
            <Center marginY={3}>
              <HStack space={3}>
                {color?.map(item => (
                  <Circle
                    key={item.toString()}
                    size="15px"
                    bg={item.toString()}
                  />
                ))}
              </HStack>
            </Center>
            {user && (
              <Price
                ItemChargeNormal={data?.ItemChargeNormal}
                ItemChargeSales={data?.ItemChargeSales}
                ItemDCRate={data?.ItemDCRate}
              />
            )}
            <View style={{marginHorizontal: 15}}>
              <Button
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
            </View>
          </View>
        </View>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  // card: {},
});
