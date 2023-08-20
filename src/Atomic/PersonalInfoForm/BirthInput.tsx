import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FormControl, Input, Box} from 'native-base';

interface BirthInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setIsValidBirth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BirthInput({
  text,
  setText,
  setIsValidBirth,
}: BirthInputProps) {
  const [error, setError] = useState('');

  const validateBirthInput = (input: string): boolean => {
    const pattern = /^\d{6}$/;
    return pattern.test(input);
  };

  const handleChange = (text: string) => {
    if (validateBirthInput(text)) {
      setIsValidBirth(validateBirthInput(text));
      setError('');
    } else {
      setError('올바른 생년월일 형식이 아닙니다. (예: 981223)');
    }
    setText(text);
  };

  return (
    <FormControl isInvalid={error !== ''}>
      <FormControl.Label
        _text={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
        생년월일
      </FormControl.Label>
      <Input
        autoCapitalize="none"
        type="text"
        value={text}
        bg="#FFFFFF"
        InputRightElement={
          <Box mr={3}>
            <Icon name="user" size={14} color="black" />
          </Box>
        }
        onChangeText={handleChange}
      />
      {error !== '' && (
        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
}
