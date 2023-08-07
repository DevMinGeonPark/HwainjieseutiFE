import React, {useEffect, useState} from 'react';
import {HStack, Button} from 'native-base';

type InstallmentButtonsProps = {
  ForMonth: string[];
  setInstallment: React.Dispatch<React.SetStateAction<string>>;
  route: Readonly<object | undefined>;
};

export default function InstallmentButtons({
  ForMonth,
  setInstallment,
  route,
}: InstallmentButtonsProps) {
  const [selection, setSelection] = useState<number>(0);

  useEffect(() => {
    setSelection(0);
  }, [route]);

  return (
    <HStack space={2} my={3}>
      {ForMonth.map((month, index) => (
        <Button
          key={index}
          flex={1}
          onPress={() => {
            setSelection(index);
            setInstallment(month);
          }}
          variant="outline"
          size="sm"
          borderWidth={selection === index ? 2 : 1}
          borderColor={selection === index ? '#5ddfde' : '#DDD'}
          _text={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>
          {month + '개월'}
        </Button>
      ))}
    </HStack>
  );
}
