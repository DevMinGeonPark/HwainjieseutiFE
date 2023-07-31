import React, {useEffect, useState} from 'react';
import {HStack, Button, Box} from 'native-base';
import {SupportType} from '@Types/DetailTypes';
import {FontText} from '@src/Atomic/FontText';
import {useRoute} from '@react-navigation/native';

type SupTypeButtonsProps = {
  SupportType: SupportType[];
  setSupType: React.Dispatch<React.SetStateAction<string>>;
  route: Readonly<object | undefined>;
};

export default function SupTypeButtons({
  SupportType,
  setSupType,
  route,
}: SupTypeButtonsProps) {
  const [selection, setSelection] = useState<number>(0);
  const subText = SupportType.map(supportType => supportType.ClickComment);

  useEffect(() => {
    setSelection(0);
  }, [route]);

  useEffect(() => {
    setSupType(selection === 0 ? 'Machine' : 'Charge');
  }, [selection]);

  return (
    <>
      <HStack space={2} my={3}>
        {SupportType.map((supportType, index) => (
          <Button
            key={index}
            flex={1}
            onPress={() => {
              setSelection(index);
            }}
            variant="outline"
            size="sm"
            borderWidth={selection === index ? 2 : 1}
            borderColor={selection === index ? '#5fdedd' : 'muted.300'}
            _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
            {supportType.Title}
          </Button>
        ))}
      </HStack>
      <Box>
        <FontText>{subText[selection]}</FontText>
      </Box>
    </>
  );
}
