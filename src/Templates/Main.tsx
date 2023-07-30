import {useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@Modules/CarouselView';
import {Linking} from 'react-native';
import useMainData from '@src/hooks/queryHooks/useMainData';
import {Image, Box, Pressable} from 'native-base';
import Title from '@src/Atomic/Title';
import ProductList from '@src/Modules/Main/ProductList';
import Banner from '@src/Modules/Main/Banner';

const Main = () => {
  const {data} = useMainData();
  const width = useWindowDimensions().width;

  const pressableStyle = {
    width: width,
    maxHeight: 357,
  };

  return (
    <Box>
      <CarouselView props={data?.ImgMainRoll} />
      <Pressable {...pressableStyle}>
        <Banner img={data?.ImgMainSub[0].imgsrc} />
      </Pressable>
      <Title title="NEW" desc="얼리어답터를 위한 신제품!" />
      <ProductList items={data?.ItemNewList || []} />
      <Pressable
        {...pressableStyle}
        maxHeight={200}
        marginTop={50}
        onPress={() =>
          Linking.openURL(
            data?.SubBanner.BannerUrl
              ? data?.SubBanner.BannerUrl.toString()
              : '',
          )
        }>
        <Banner img={data?.SubBanner.BannerImg} />
      </Pressable>
      <Title title="BEST" desc="주문폭주! 이달의 BEST 상품!" />
      <ProductList items={data?.ItemBestList || []} />
    </Box>
  );
};

export default withCommontLayout(Main);
