import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  VStack,
  HStack,
  Center,
  Spinner,
  Heading,
  ScrollView,
} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import useMenuData from '@src/hooks/useMenuData';

import {useRoute} from '@react-navigation/native';
import {getMenuData} from '@src/API/getMenuData';
import MenuButton from '@src/Atomic/Menu/MenuButton';

type onNavigationTypes = {
  label: string;
  menu_type: string;
  menu_var: string;
};

const NavigationBar = () => {
  const contents: string[] = [];

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const {data, isLoading} = useMenuData();

  const parmas = useRoute();

  return (
    <ScrollView horizontal={true} style={styles.contriner}>
      <HStack space={2} style={styles.contriner}>
        <MenuButton
          navigation={navigation}
          screenName="Samsung"
          menuText="삼성"
          params={{MenuType: 'ca_id', MenuVar: '10'}}
        />
        <MenuButton
          navigation={navigation}
          screenName="Apple"
          menuText="애플"
          params={{MenuType: 'ca_id', MenuVar: '20'}}
        />
        <MenuButton
          navigation={navigation}
          screenName="Etc"
          menuText="기타"
          params={{MenuType: 'ca_id', MenuVar: '50'}}
        />
        <MenuButton
          navigation={navigation}
          screenName="ImageProduct"
          menuText="인터넷+TV"
          params={{MenuType: 'co_id', MenuVar: 'internet'}}
        />
        <MenuButton
          navigation={navigation}
          screenName="ImageProduct"
          menuText="듀얼번호"
          params={{MenuType: 'co_id', MenuVar: 'kt_dualnumber'}}
        />
        <MenuButton
          navigation={navigation}
          screenName="ImageProduct"
          menuText="이벤트"
          params={{MenuType: 'bo_table', MenuVar: 'free'}}
        />
      </HStack>
    </ScrollView>
  );
};

export default React.memo(NavigationBar);

const styles = StyleSheet.create({
  contriner: {
    flexDirection: 'row',
  },
});
