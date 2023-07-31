import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';

interface KTDiscountButtonProps {
  KTDiscount: string[];
  setKtDiscount: React.Dispatch<React.SetStateAction<string>>;
  route: Readonly<object | undefined>;
}

export default function KTDiscountButtons({
  KTDiscount,
  setKtDiscount,
  route,
}: KTDiscountButtonProps) {
  const [selection, setSelection] = useState<number>(0);

  useEffect(() => {
    setSelection(0);
  }, [route]);

  useEffect(() => {
    setKtDiscount(selection === 0 ? 'Y' : 'N');
  }, [selection]);

  return (
    <>
      <HStack space={2}>
        {KTDiscount &&
          KTDiscount.map((KTDiscount, index) => (
            <Button
              mt={2}
              key={index}
              flex={1}
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
    </>
  );
}

const styles = StyleSheet.create({});
