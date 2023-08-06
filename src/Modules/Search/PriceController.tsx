import {Button, HStack, Icon, Input, Box} from 'native-base';
import React, {useCallback} from 'react';
import {FontText} from '@src/Atomic/FontText';

interface PriceControllerProps {
  // onPriceChange: (minPrice: string, maxPrice: string) => void;
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

export default function PriceController({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: PriceControllerProps) {
  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
  };

  return (
    <Box>
      <HStack space={2} alignItems="center">
        <Input
          w={100}
          autoCapitalize="none"
          placeholder="최소 가격"
          value={minPrice}
          onChangeText={handleMinPriceChange}
        />
        <FontText>~</FontText>
        <Input
          w={100}
          autoCapitalize="none"
          placeholder="최대 가격"
          value={maxPrice}
          onChangeText={handleMaxPriceChange}
        />
      </HStack>
    </Box>
  );
}
