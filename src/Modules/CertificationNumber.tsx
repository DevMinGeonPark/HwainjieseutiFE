import {View, Text} from 'react-native';
import React from 'react';
import {FormControl, Input, Modal, VStack, Button} from 'native-base';
import {FontText} from '@src/Atomic/FontText';

interface CertificationNumberProps {
  // isValid: boolean;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  confirmCode: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoneCerti: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CertificationNumber({
  // isValid,
  code,
  setCode,
  confirmCode,
  showModal,
  setShowModal,
  setPhoneCerti,
}: CertificationNumberProps) {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>휴대전화 인증</Modal.Header>
        <Modal.Body>
          <FormControl>
            {/* isInvalid={!isValid} */}
            <FormControl isRequired>
              <VStack>
                <FormControl.Label
                  _text={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                  인증번호
                </FormControl.Label>
                <Input
                  autoCapitalize="none"
                  value={code}
                  onChangeText={(text: string) => setCode(text)}
                  keyboardType="phone-pad"
                />
                <FontText mt={2} fontSize={13}>
                  휴대전화로 전송된 인증번호를 입력해주세요. 해당 모달을 나가게
                  되면 다시 인증하셔야됩니다.
                </FontText>
                {/* {!isValid && (
                  <FormControl.ErrorMessage>
                    올바른 인증번호를 입력해주세요.
                  </FormControl.ErrorMessage>
                )} */}
              </VStack>
            </FormControl>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              size="sm"
              _text={{color: 'black'}}
              onPress={() => {
                setShowModal(false);
              }}>
              Cancel
            </Button>
            <Button
              size="sm"
              bg="black"
              onPress={() => {
                confirmCode();
                // setShowModal(false);
                setPhoneCerti(true);
              }}>
              인증완료
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
