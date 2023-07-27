import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';
import {RegiType} from '@Types/DetailTypes';

type SignTypeButtonsProps = {
  regiTypes: RegiType[];
};

export default function SignTypeButtons({regiTypes}: SignTypeButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = regiTypes.map(regiType => regiType.ClickComment);

  return (
    <View>
      <HStack space={2} ml={2} mt={3}>
        {regiTypes.map((regiType, index) => (
          <Button
            // ml={3}
            key={index}
            width={width / 3 - margins}
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
      <View style={{margin: 10}}>
        <Text>{subText[selection]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
