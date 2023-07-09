import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VStack, HStack, Center} from 'native-base';

export default function NavigationBar() {
  const contents = ['삼성', '애플', '기타', '인터넷+TV'];

  return (
    <HStack space={2} style={styles.contriner}>
      {contents.map((content, i) => (
        <Center
          p={3}
          key={i}
          _text={{
            fontSize: '14',
          }}>
          {content}
        </Center>
      ))}
    </HStack>
  );
}

const styles = StyleSheet.create({
  contriner: {
    flexDirection: 'row',
  },
});
