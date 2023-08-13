import {useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@src/Modules/Main/CarouselView';
import {Linking} from 'react-native';
import useMainData from '@src/hooks/queryHooks/useMainData';
import {Box, Pressable} from 'native-base';
import Title from '@src/Atomic/Main/Title';
import ProductList from '@src/Modules/Main/ProductList';
import Banner from '@src/Modules/Main/Banner';

// import messaging from '@react-native-firebase/messaging';
// import localNotification from '@src/Utils/localNotification';
import notifee, {EventType} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {dataTypes} from '@Types/notificationTypes';
import messaging from '@react-native-firebase/messaging';
import localNotification from '@src/Utils/localNotification';

const Main = () => {
  const {data} = useMainData();
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const pressableStyle = {
    width: width,
    maxHeight: 357,
  };

  React.useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          const data = detail.notification?.data as unknown as dataTypes;
          navigation.navigate('EventBorad', {
            Uid: data.uid,
          });
          break;
      }
    });
  }, []);

  React.useEffect(() => {
    return notifee.onBackgroundEvent(async ({type, detail}) => {
      console.log('사용자가 알림을 클릭했습니다.', detail.notification);
      switch (type) {
        case EventType.PRESS:
          // console.log('사용자가 알림을 클릭했습니다.', detail.notification);
          const data = detail.notification?.data as unknown as dataTypes;
          navigation.navigate('EventBorad', {
            Uid: data.uid,
          });
          break;
        case EventType.DISMISSED:
          console.log('사용자가 알림을 닫았습니다.', detail.notification);
          break;
      }
    });
  }, []);

  return (
    <Box>
      <CarouselView props={data?.ImgMainRoll} />
      <Pressable {...pressableStyle}>
        <Banner
          img={data?.ImgMainSub[0].imgsrc}
          imgUrl={data?.ImgMainSub[0].imgurl}
        />
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
