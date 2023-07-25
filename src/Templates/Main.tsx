import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@Modules/CarouselView';
import {Linking} from 'react-native';
import useMainData from '@src/hooks/useMainData';
import {Image, ScrollView, Box, HStack, Pressable} from 'native-base';
import Title from '@src/Atomic/Title';
import SplashScreen from 'react-native-splash-screen';
import ProductCard from '@src/Modules/ProductCard';

const Main = () => {
  const {data} = useMainData();
  const width = useWindowDimensions().width;

  // console.log(JSON.stringify(data, null, 2));

  // TODO :: ProductCard와 Product Navigator 리팩토링 하기 + _file들 삭제하기

  // console.log(JSON.stringify(data, null, 2));

  return (
    <ScrollView>
      <CarouselView props={data?.ImgMainRoll} />
      <Box width={width} maxHeight={357}>
        {data?.ImgMainSub[0].imgsrc && (
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            alt="MainImage"
            source={{uri: data?.ImgMainSub[0].imgsrc}}
          />
        )}
      </Box>
      <Title title="NEW" desc="얼리어답터를 위한 신제품!" />
      <HStack flexWrap="wrap" flex="1" flexDirection="row">
        {data?.ItemNewList?.map((item, index) => (
          <ProductCard
            key={index}
            CategorieCode={item.CategorieCode || 'defulat'}
            ItemCode={item.ItemCode || 'defulat'}
            ItemImgUrl={item.ItemImgUrl || 'defulat'}
            ItemName={item.ItemName || 'defulat'}
            ItemColor={item.ItemColor || 'defulat'}
            ItemChargeNormal={item.ItemChargeNormal || 0}
            ItemChargeSales={item.ItemChargeSales || 0}
            ItemDCRate={item.ItemDCRate || 0}
          />
        ))}
      </HStack>
      <Pressable
        width={width}
        maxHeight={200}
        marginTop={50}
        onPress={() =>
          Linking.openURL(
            data?.SubBanner.BannerUrl
              ? data?.SubBanner.BannerUrl.toString()
              : '',
          )
        }>
        {data?.SubBanner.BannerImg && (
          <Image
            width={width}
            height={'100%'}
            resizeMode="cover"
            alt="SubBanner"
            source={{uri: data?.SubBanner.BannerImg}}
          />
        )}
      </Pressable>
      <Title title="BEST" desc="주문폭주! 이달의 BEST 상품!" />
      <HStack flexWrap="wrap" flex="1" flexDirection="row">
        {data?.ItemBestList?.map((item, index) => (
          <ProductCard
            key={index}
            CategorieCode={item.CategorieCode || 'defulat'}
            ItemCode={item.ItemCode || 'defulat'}
            ItemImgUrl={item.ItemImgUrl || 'defulat'}
            ItemName={item.ItemName || 'defulat'}
            ItemColor={item.ItemColor || 'defulat'}
            ItemChargeNormal={item.ItemChargeNormal || 0}
            ItemChargeSales={item.ItemChargeSales || 0}
            ItemDCRate={item.ItemDCRate || 0}
          />
        ))}
      </HStack>
    </ScrollView>
  );
};

export default withCommontLayout(Main);

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
