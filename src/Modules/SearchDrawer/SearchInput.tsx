import {Input, Button, SearchIcon, FormControl} from 'native-base';
import React from 'react';

interface SearchInputProps {
  handleSearch: () => void;
  copyText: string;
  setCopyText: (value: string) => void;
  showError: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  handleSearch,
  copyText,
  setCopyText,
  showError,
}) => {
  return (
    <FormControl isInvalid={showError}>
      <Input
        h={8}
        bg="white"
        style={{fontSize: 12}}
        rounded="none"
        placeholder="검색어는 두글자 이상"
        onChangeText={v => setCopyText(v)}
        value={copyText}
        InputRightElement={
          <Button
            variant={'ghost'}
            rounded="none"
            borderLeftColor="muted.300"
            borderLeftWidth={1}
            bg="#323C46"
            onPress={handleSearch}
            leftIcon={<SearchIcon size="5" color="white" />}
          />
        }
      />
      <FormControl.ErrorMessage>
        검색어는 반드시 두 글자 이상이어야 합니다.
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
