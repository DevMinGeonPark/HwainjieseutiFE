import {Alert, Platform, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@src/Modules/Main/CarouselView';
import {Linking} from 'react-native';
import useMainData from '@src/hooks/queryHooks/useMainData';
import {Box, Button, Image, Input, Pressable} from 'native-base';
import Title from '@src/Atomic/Main/Title';
import ProductList from '@src/Modules/Main/ProductList';
import Banner from '@src/Modules/Main/Banner';
import notifee, {EventType} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {dataTypes} from '@Types/notificationTypes';
import messaging from '@react-native-firebase/messaging';
import useLog from '@src/hooks/useLog';
import PopupModal from '@src/Modules/Main/PopupModal';
import popupStorage from '@src/Utils/popupStorage';
import {ImgMainRoll} from '@src/Types/MainDataTypes';

const Main = () => {
  const {data} = useMainData();
  const width = useWindowDimensions().width;
  // const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  // const log = useLog('root');
  // const [modal, setModal] = useState<boolean>(true);

  const pressableStyle = {
    width: width,
    maxHeight: 357,
  };

  return (
    <Box>
      {/* <CarouselView imgs={data?.ImgMainRoll || ([] as ImgMainRoll[])} />
      <Box {...pressableStyle}>
        <Banner
          img={data?.ImgMainSub[0].imgsrc}
          imgUrl={data?.ImgMainSub[0].imgurl}
        />
      </Box> */}
      <Box>
        <Title title="NEW" desc="얼리어답터를 위한 신제품!" />
        <ProductList items={data?.ItemNewList || []} />
      </Box>
      <Box>
        <Title title="BEST" desc="주문폭주! 이달의 BEST 상품!" />
        <ProductList items={data?.ItemBestList || []} />
      </Box>
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
        {data?.SubBanner?.BannerImg && (
          <Image
            width={width}
            height={'100%'}
            resizeMode="cover"
            alt="MainImage"
            source={{uri: data?.SubBanner?.BannerImg}}
          />
        )}
      </Pressable>
      <Box>
        <Title title="BEST" desc="주문폭주! 이달의 BEST 상품!" />
        <ProductList items={data?.ItemBestList || []} />
      </Box>
    </Box>
  );
};

export default withCommontLayout(Main, {showGoCustomerCenter: true});
