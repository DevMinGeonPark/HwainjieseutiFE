import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import {Box, Image, Center, HStack, AspectRatio, Pressable} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import {ListNotice} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useToast} from 'native-base';

interface EventPanelProps {
  data: ListNotice | undefined;
}

export default function EventPanel({data}: EventPanelProps) {
  const width = useWindowDimensions().width;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const toast = useToast();

  return (
    <Pressable
      onPress={() => {
        data?.Uid
          ? navigation.navigate('EventBorad', {Uid: data?.Uid})
          : toast.show({
              title: 'uid가 존재하지않습니다. 관리자에게 문의하세요.',
            });
      }}>
      <AspectRatio w="100%" ratio={18 / 12}>
        <Image
          source={{
            uri: data?.ImgSrc.replace(/http:/g, 'https:'),
          }}
          alt="image"
        />
      </AspectRatio>
      <Center p={2}>
        <FontHeading fontSize={12}>{data?.Title}</FontHeading>
      </Center>
      <HStack justifyContent="space-between" mx={3} p={2}>
        <FontText fontSize={12}>KT공식몰</FontText>
        <HStack space={1} alignItems="center">
          <CommentIcon name="comment" color="#777777" size={13} />
          <FontText fontSize={13} color="#E94E1B">
            30
          </FontText>
        </HStack>
      </HStack>
    </Pressable>
  );
}
