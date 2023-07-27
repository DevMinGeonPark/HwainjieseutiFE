import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {HStack, ScrollView} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import MenuButton from '@src/Atomic/Menu/MenuButton';

type onNavigationTypes = {
  label: string;
  menu_type: string;
  menu_var: string;
};

const NavigationBar = () => {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

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
        />
        <MenuButton
          navigation={navigation}
          screenName="ImageProduct"
          menuText="인터넷+TV"
          params={{
            MenuType: 'co_id',
            MenuVar: 'internet',
            num: Math.random(),
            name: '인터넷+TV',
          }}
        />
        <MenuButton
          navigation={navigation}
          screenName="ImageProduct"
          menuText="이벤트"
          params={{
            MenuType: 'bo_table',
            MenuVar: 'free',
            num: Math.random(),
            name: '이벤트',
          }}
        />
      </HStack>
    </ScrollView>
  );
};

export default React.memo(NavigationBar);
