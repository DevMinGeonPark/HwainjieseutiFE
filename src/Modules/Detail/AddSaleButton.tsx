import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';

interface AddSaleButtonProps {
  KTDiscount: string[];
  setAddSale: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddSaleButton({
  KTDiscount,
  setAddSale,
}: AddSaleButtonProps) {
  const [selection, setSelection] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = [
    '출고가에서 공시지원금+대리점 추가지원금 15% 할인',
    '매월 기본요금에서 25%할인 (선택약정)',
  ];

  useEffect(() => {
    setAddSale(selection === 0 ? 'Y' : 'N');
  }, [selection]);

  return (
    <View>
      <HStack space={2} ml={2} mt={3}>
        {KTDiscount &&
          KTDiscount.map((KTDiscount, index) => (
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
              {KTDiscount}
            </Button>
          ))}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({});
