import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';

type InstallmentButtonsProps = {
  ForMonth: string[];
  setInstallment: React.Dispatch<React.SetStateAction<string>>;
};

export default function InstallmentButtons({
  ForMonth,
  setInstallment,
}: InstallmentButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 10;

  return (
    <View>
      <HStack space={2} ml={2} mt={3}>
        {ForMonth.map((month, index) => (
          <Button
            key={index}
            width={width / 4 - margins}
            onPress={() => {
              setSelection(index);
              setInstallment(month);
            }}
            variant="outline"
            size="sm"
            borderWidth={selection === index ? 3 : 1}
            borderColor={selection === index ? 'primary.400' : 'muted.300'}
            _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}>
            {month + '개월'}
          </Button>
        ))}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({});
