import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VStack, HStack, Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';

export default function NavigationBar() {
  const contents = ['삼성', '애플', '기타', '인터넷+TV'];

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  return (
    <HStack space={2} style={styles.contriner}>
      {contents.map((content, i) => (
        <Pressable key={i} onPress={() => navigation.navigate('Product')}>
          <Center
            p={3}
            key={i}
            _text={{
              fontSize: '14',
            }}>
            {content}
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
