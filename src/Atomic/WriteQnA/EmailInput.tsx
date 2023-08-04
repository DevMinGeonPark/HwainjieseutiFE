// EmailInput.tsx
import React, {useState} from 'react';
import {FormControl, Input, VStack} from 'native-base';
import {isValidEmail} from '@Utils/Validatior';

interface EmailInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onValidityChange: (isValid: boolean) => void; // 추가된 부분
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
  onValidityChange,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (inputValue: string) => {
    onChange(inputValue);
    const valid = isValidEmail(inputValue);
    onValidityChange(valid); // 추가된 부분
    setIsValid(valid);
  };

  return (
    <FormControl isRequired isInvalid={!isValid}>
      <VStack>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          value={value}
          onChangeText={handleChange}
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isValid && (
          <FormControl.ErrorMessage>
            올바른 이메일을 입력해주세요.
          </FormControl.ErrorMessage>
        )}
      </VStack>
    </FormControl>
  );
};

export default EmailInput;
