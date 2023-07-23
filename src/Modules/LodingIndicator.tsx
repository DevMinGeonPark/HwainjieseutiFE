import {View, Text, Dimensions} from 'react-native';
import {HStack, Spinner, Heading, Skeleton, Box} from 'native-base';
import React from 'react';

interface LodingIndicatorProps {
  count: number;
}

export default function LodingIndicator({count}: LodingIndicatorProps) {
  const width = Dimensions.get('window').width;
  const m = 3;
  const itemM = 1;

  return (
    <View style={{margin: m}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {Array.from({length: count}).map((_, index) => (
          <Skeleton
            key={index}
            width={width / 2 - (m * 3 + itemM * 2)}
            h={width / 2 + 130}
            rounded="3xl"
            m={1}
          />
        ))}
      </View>
    </View>
  );
}
