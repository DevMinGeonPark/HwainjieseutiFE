import React from 'react';
import {AlertDialog, Button, Input} from 'native-base';
import useDeleteMember from '@src/hooks/queryHooks/useDeleteMember';
import {useUserState} from '@src/contexts/UserContext';
import {FontText} from '@src/Atomic/FontText';
import {encrypt} from '@src/Utils/Encrypt';
import authStorage from '@src/Utils/authStorage';

interface AlertModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertModal({isOpen, setIsOpen}: AlertModalProps) {
  const onClose = () => setIsOpen(false);
  const [user, setUser] = useUserState();
  const deleteMember = useDeleteMember();
  const cancelRef = React.useRef(null);
  const [password, setPassword] = React.useState('');

  const handleDeleteMember = async () => {
    await deleteMember.mutateAsync({
      KTShopID: user?.UserId || '',
      KTShopPW: encrypt(password),
    });
    setUser(null);
    authStorage.clear();
    onClose();
  };

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>회원탈퇴</AlertDialog.Header>
        <AlertDialog.Body>
          <FontText>정말 회원에서 탈퇴하시겠습니까?</FontText>
          <Input
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
            type="password"
            p={2}
            my={2}
            placeholder="비밀번호를 입력해주세요."
          />
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={handleDeleteMember}>
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
