import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Avatar} from 'native-base';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Box
        bg="white"
        p="12"
        rounded="xl"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'dark.100',
          textAlign: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>갤럭시23 울트라 256GB</Text>
        <Box width={10} h={10} rounded="3xl" bg="green"></Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
});
