import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button, Box} from 'native-base';
import {RegiType} from '@Types/DetailTypes';
import {FontText} from '@src/Atomic/FontText';

type SignTypeButtonsProps = {
  regiTypes: RegiType[];
};

export default function SignTypeButtons({regiTypes}: SignTypeButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = regiTypes.map(regiType => regiType.ClickComment);

  return (
    <>
      <HStack space={2} my={3}>
        {regiTypes.map((regiType, index) => (
          <Button
            key={index}
            flex={1}
            onPress={() => setSelection(index)}
            variant="outline"
            size="sm"
            borderWidth={selection === index ? 3 : 1}
            borderColor={selection === index ? 'primary.400' : 'muted.300'}
            _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
            {regiType.Title}
          </Button>
        ))}
      </HStack>
      <Box>
        <FontText>{subText[selection]}</FontText>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({});
