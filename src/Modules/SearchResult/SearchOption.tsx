import {Box, Button, Checkbox, HStack, Input, VStack} from 'native-base';
import React, {useEffect} from 'react';
import {FontText} from '@src/Atomic/FontText';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ParamProps} from '@Types/SearchDataType';
import Price from '@src/Atomic/ProductCard/Price';
import PriceController from '../Search/PriceController';
import SearchSubText from '../Search/SearchSubText';
import CheckboxGroup from '../Search/CheckBoxGroup';
import {SearchInput} from '../SearchDrawer/SearchInput';

interface SearchOptionProps {
  selected: string[];
  handleCheckboxToggle: (value: string) => void;
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  copyText: string;
  setCopyText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  showError: boolean;
}

export default function SearchOption({
  selected,
  handleCheckboxToggle,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  copyText,
  setCopyText,
  handleSearch,
  showError,
}: SearchOptionProps) {
  return (
    <VStack space={3}>
      <CheckboxGroup
        selected={selected}
        handleCheckboxToggle={handleCheckboxToggle}
      />
      <PriceController
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <SearchInput
        copyText={copyText}
        setCopyText={setCopyText}
        handleSearch={handleSearch}
        showError={showError}
      />
      <SearchSubText />
    </VStack>
  );
}
