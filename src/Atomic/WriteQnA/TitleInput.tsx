// EmailInput.tsx
import React, {useState} from 'react';
import {FormControl, Input, VStack} from 'native-base';
import {isValidEmail} from '@Utils/Validatior';

interface TitleInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onValidityChange: (isValid: boolean) => void; // 추가된 부분
}

const TitleInput: React.FC<TitleInputProps> = ({
  value,
  onChange,
  onValidityChange,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (inputValue: string) => {
    onChange(inputValue);
    const valid = isValidTitle(inputValue); // 추가된 부분
    onValidityChange(valid); // 변경된 부분
    setIsValid(valid);
  };

  const isValidTitle = (title: string): boolean => {
    // 제목이 3자 이상이면 true, 그렇지 않으면 false 반환
    return title.length >= 3;
  };

  return (
    <FormControl isRequired isInvalid={!isValid}>
      <FormControl.Label>제목</FormControl.Label>
      <Input value={value} onChangeText={handleChange} type="text" />
      {!isValid && (
        <FormControl.ErrorMessage>
          올바른 제목을 입력해주세요. 제목은 3글자이상의 문자열이어야 합니다.
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default TitleInput;
