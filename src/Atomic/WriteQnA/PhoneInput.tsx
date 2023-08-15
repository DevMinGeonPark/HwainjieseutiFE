import React, {useState} from 'react';
import {FormControl, Input, VStack} from 'native-base';
import {isValidPhone} from '@Utils/Validatior';

interface PhoneInputProps {
  title: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onValidityChange: (isValid: boolean) => void;
  isCerti: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  title,
  value,
  onChange,
  onValidityChange,
  isCerti,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (inputValue: string) => {
    const valid = isValidPhone(inputValue);
    onValidityChange(valid);
    onChange(inputValue);
    setIsValid(valid);
  };

  return (
    <FormControl isRequired isInvalid={!isValid}>
      <VStack>
        <FormControl.Label
          _text={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
          {title}
        </FormControl.Label>
        <Input
          autoCapitalize="none"
          value={value}
          onChangeText={handleChange}
          autoComplete="tel"
          isDisabled={isCerti}
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
