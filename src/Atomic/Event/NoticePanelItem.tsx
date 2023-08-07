import React from 'react';
import {Box, HStack, Image, Pressable, useToast} from 'native-base';
import {FontText} from '../FontText';
import {FontHeading} from '../FontHeading';
import ClockIcon from 'react-native-vector-icons/FontAwesome';
import {Images} from '@assets/imgs/Images';
import {formatDate} from '@src/Utils/FormatDate';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';

interface NoticePanelItemProps {
  uid: number;
  title: string;
  date: string;
}

export default function NoticePanelItem({
  uid,
  title,
  date,
}: NoticePanelItemProps) {
  const routeParams = useRoute().params as {Uid: string};
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const toast = useToast();

  return (
    <Pressable
      p={3}
      borderBottomColor="#ddd"
      borderBottomWidth={1}
      onPress={() => {
        uid
          ? navigation.navigate('EventBorad', {Uid: uid})
          : toast.show({
              title: 'uid가 존재하지않습니다. 관리자에게 문의하세요.',
            });
      }}>
      <HStack justifyContent="space-between">
        <HStack space={1}>
          <Image
            style={{width: 37, height: 16}}
            source={Images.Event.Notice || ''}
            alt="notice"
            size={16}
          />
          <FontHeading fontSize={12}>{title}</FontHeading>
        </HStack>
        <HStack space={1} alignItems="center">
          <ClockIcon name="clock-o" size={16} />
          <FontText fontSize={12}>{formatDate(date)}</FontText>
        </HStack>
      </HStack>
    </Pressable>
  );
}
