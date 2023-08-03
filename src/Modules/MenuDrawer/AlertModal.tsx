import React from 'react';
import {AlertDialog, Button} from 'native-base';

interface AlertModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertModal({isOpen, setIsOpen}: AlertModalProps) {
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>회원탈퇴</AlertDialog.Header>
        <AlertDialog.Body>정말 회원에서 탈퇴하시겠습니까?</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={onClose}>
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
