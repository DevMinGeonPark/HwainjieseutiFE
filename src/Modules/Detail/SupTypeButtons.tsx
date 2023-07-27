import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';
import {SupportType} from '@Types/DetailTypes';

type SupTypeButtonsProps = {
  SupportType: SupportType[];
  setSupType: React.Dispatch<React.SetStateAction<string>>;
};

export default function SupTypeButtons({
  SupportType,
  setSupType,
}: SupTypeButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = SupportType.map(supportType => supportType.ClickComment);

  useEffect(() => {
    setSupType(selection === 0 ? 'Machine' : 'Charge');
  }, [selection]);

  return (
    <View>
      <HStack space={2} ml={2} mt={3}>
        {SupportType.map((supportType, index) => (
          <Button
            // ml={3}
            key={index}
            width={width / 3 - margins}
            onPress={() => {
              setSelection(index);
            }}
            variant="outline"
            size="sm"
            borderWidth={selection === index ? 3 : 1}
            borderColor={selection === index ? 'primary.400' : 'muted.300'}
            _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
            {supportType.Title}
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
