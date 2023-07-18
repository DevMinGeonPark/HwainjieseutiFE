import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VStack, HStack, Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import useMenuData from '@src/hooks/useMenuData';

export default function NavigationBar() {
  const contents: string[] = [];

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const {data, isLoading} = useMenuData();

  return (
    <HStack space={2} style={styles.contriner}>
      {data?.map((item, i) => (
        <Pressable
          key={i}
          onPress={() => {
            item.MenuType === 'ca_id'
              ? navigation.navigate('Product', {
                  MenuType: item.MenuType,
                  MenuVar: item.MenuVar,
                })
              : navigation.navigate('ImageProduct', {
                  MenuType: item.MenuType,
                  MenuVar: item.MenuVar,
                });
          }}>
          <Center
            p={3}
            key={i}
            _text={{
              fontSize: '14',
            }}>
            {item.MenuName}
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
}

const styles = StyleSheet.create({
  contriner: {
    flexDirection: 'row',
  },
});
