import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HStack, Center} from 'native-base';
import {PriceType} from '@Types/MainDataTypes';

export default function Price(data: PriceType) {
  return (
    <Center marginBottom={18}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
        {data.ItemDCRate}% DC
      </Text>
      <HStack space={3}>
        <Text
          style={{
            fontSize: 13,
            textDecorationLine: 'line-through',
            color: '#888',
          }}>
          {data.ItemChargeNormal.toLocaleString()}
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
          ￦ {data.ItemChargeSales.toLocaleString()}
        </Text>
      </HStack>
    </Center>
  );
}

const styles = StyleSheet.create({});
