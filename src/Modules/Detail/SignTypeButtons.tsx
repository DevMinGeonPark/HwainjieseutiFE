import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button, Box} from 'native-base';
import {RegiType} from '@Types/DetailTypes';
import {FontText} from '@src/Atomic/FontText';

type SignTypeButtonsProps = {
  regiTypes: RegiType[];
  route: Readonly<object | undefined>;
};

export default function SignTypeButtons({
  regiTypes,
  route,
}: SignTypeButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = regiTypes.map(regiType => regiType.ClickComment);

  useEffect(() => {
    setSelection(0);
  }, [route]);

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
            borderWidth={selection === index ? 2 : 1}
            borderColor={selection === index ? '#5ddfde' : '#DDD'}
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
