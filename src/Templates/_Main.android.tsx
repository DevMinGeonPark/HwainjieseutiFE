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
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import useLog from '@src/hooks/useLog';
import PopupModal from '@src/Modules/Main/PopupModal';
import popupStorage from '@src/Utils/popupStorage';
import {ImgMainRoll} from '@src/Types/MainDataTypes';
import authStorage from '@src/Utils/authStorage';
import usePopupModal from '@src/hooks/queryHooks/usePopupModal';
import {useUserStore} from '@src/Store/userStore';

const Main = () => {
  const {data} = useMainData();
  const {popupData} = usePopupModal();
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const log = useLog('root');
  const [modal, setModal] = useState<boolean>(true);

  const {hasUser} = useUserStore();

  useEffect(() => {
    const fn = async () => {
      const status = await popupStorage.get();

      if (!status) {
        return;
      }
      const popUplastTime = new Date(status?.lastDate).getDate();
      const currentLoginDate = new Date().getDate();

      const dateDiff = currentLoginDate - popUplastTime;

      if (dateDiff >= 1) {
        setModal(true);
      } else {
        setModal(false);
      }
    };

    fn();
  }, []);

  const pressableStyle = {
    width: width,
    maxHeight: 357,
  };

  const closeModal = () => {
    setModal(false);
  };

  // android only
  React.useEffect(() => {
    // 백그라운드에서 알림을 받았을 때
    if (Platform.OS === 'android') {
      messaging().onNotificationOpenedApp(remoteMessage => {
        if (remoteMessage?.data?.url) {
          navigation.navigate('Event', {url: remoteMessage.data.url});
        }
        notifee.cancelAllNotifications();
      });
      // 앱이 종료된 상태에서 알림을 받았을 때
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          // 앱이 종료된 상태에서 알림을 받았을 때는 까다로워서 그냥 처리
          if (remoteMessage) {
            if (remoteMessage?.data?.url) {
              navigation.navigate('Event', {url: remoteMessage.data.url});
            }
            notifee.cancelAllNotifications();
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

          console.log(data);

          if (hasUser() && data.url) {
            navigation.navigate('Event', {url: data.url});
          } else {
            Alert.alert('로그인이 필요합니다.', '', [
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
          }
          notifee.cancelAllNotifications();
          break;
      }
    });
  }, []);

  return (
    <Box>
      <CarouselView imgs={data?.ImgMainRoll || ([] as ImgMainRoll[])} />
      <Box {...pressableStyle}>
        <Banner
          img={data?.ImgMainSub[0].imgsrc}
          imgUrl={data?.ImgMainSub[0].imgurl}
        />
      </Box>
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
      {/* {hasUser() && popupData && (
        <PopupModal isOpen={modal} onClose={closeModal} data={popupData} />
      )} */}
    </Box>
  );
};

export default withCommontLayout(Main, {showGoCustomerCenter: true});
