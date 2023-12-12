import React from 'react';
import {HStack, ScrollView} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import MenuButton from '@src/Atomic/Menu/MenuButton';
import {useRoute} from '@react-navigation/native';
import {Platform} from 'react-native';

const NavigationBar = () => {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const currentName = useRoute().name;

  return (
    <ScrollView horizontal={true}>
      <HStack space={7} flexDirection="row" alignItems="center" px={5}>
        <MenuButton
          navigation={navigation}
          screenName="Samsung"
          menuText="삼성"
          params={{
            MenuType: 'ca_id',
            MenuVar: '10',
            num: Math.random(),
            name: '삼성',
          }}
          currentName={currentName}
        />

        <MenuButton
          navigation={navigation}
          screenName="Apple"
          menuText="애플"
          params={{
            MenuType: 'ca_id',
            MenuVar: '20',
            num: Math.random(),
            name: '애플',
          }}
          currentName={currentName}
        />
        <MenuButton
          navigation={navigation}
          screenName="Etc"
          menuText="기타"
          params={{
            MenuType: 'ca_id',
            MenuVar: '50',
            num: Math.random(),
            name: '기타',
          }}
          currentName={currentName}
        />
        {/* 두 요소의 경우 num과 name이 필요없음. */}
        <MenuButton
          navigation={navigation}
          screenName="InternetPlusTV"
          menuText="인터넷+TV"
          params={{
            MenuType: 'co_id',
            MenuVar: 'internet',
            num: Math.random(),
            name: '인터넷+TV',
          }}
          currentName={currentName}
        />
        <MenuButton
          navigation={navigation}
          screenName="Event"
          menuText="이벤트"
          params={{
            MenuType: 'bo_table',
            MenuVar: 'free',
            num: Math.random(),
            name: '이벤트',
          }}
          currentName={currentName}
        />
      </HStack>
    </ScrollView>
  );
};

export default React.memo(NavigationBar);
