import {Platform, useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@src/Modules/Main/CarouselView';
import {Linking} from 'react-native';
import useMainData from '@src/hooks/queryHooks/useMainData';
import {Box, Button, Input, Pressable} from 'native-base';
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

const Main = () => {
  const {data} = useMainData();
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const log = useLog('root');

  const pressableStyle = {
    width: width,
    maxHeight: 357,
  };

  // android only
  React.useEffect(() => {
    // 백그라운드에서 알림을 받았을 때
    if (Platform.OS === 'android') {
      messaging().onNotificationOpenedApp(remoteMessage => {
        navigation.navigate('EventBorad', {
          Uid: Number(remoteMessage?.data?.uid) || 0,
        });
      });
      // 앱이 종료된 상태에서 알림을 받았을 때
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            navigation.navigate('EventBorad', {
              Uid: Number(remoteMessage?.data?.uid) || 0,
            });
          }
        });
    }
  }, []);

  // Foreground process
  React.useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          log.error('User dismissed notification', detail.notification);
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
