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
          borderColor={selection === index ? '#5fdedd' : 'muted.300'}
          _text={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>
          {month + '개월'}
        </Button>
      ))}
    </HStack>
  );
}
