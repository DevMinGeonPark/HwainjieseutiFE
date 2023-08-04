import React, {useState} from 'react';
import {FormControl, Input, VStack} from 'native-base';
import {isValidPhone} from '@Utils/Validatior';

interface PhoneInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onValidityChange: (isValid: boolean) => void; // 추가된 부분
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  onValidityChange,
}) => {
  const [isValid, setIsValid] = useState(true);

  const formatPhoneNumber = (value: string) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    if (match) {
      const formatted = `${match[1]}-${match[2]}${
        match[3].length === 4 ? '-' : ''
      }${match[3]}`;
      return formatted;
    }
    return value;
  };

  const handleChange = (inputValue: string) => {
    const formattedValue = formatPhoneNumber(inputValue);
    const valid = isValidPhone(formattedValue.replace(/-/g, ''));
    onValidityChange(valid); // 추가된 부분
    onChange(formattedValue);
    setIsValid(valid);
  };

  return (
    <FormControl isRequired isInvalid={!isValid}>
      <VStack>
        <FormControl.Label>Phone</FormControl.Label>
        <Input
          value={value}
          onChangeText={handleChange}
          autoComplete="tel"
          keyboardType="phone-pad"
        />
        {!isValid && (
          <FormControl.ErrorMessage>
            올바른 전화번호를 입력해주세요.
          </FormControl.ErrorMessage>
        )}
      </VStack>
    </FormControl>
  );
};

export default PhoneInput;
