import {Modal, VStack, HStack, Button} from 'native-base';
import {WebView} from 'react-native-webview';
import React from 'react';

interface CertiModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function CertiModal({isOpen, onClose, url}: CertiModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>External Page</Modal.Header>
        <VStack space={5} p="5">
          {url && <WebView source={{uri: url}} javaScriptEnabled={true} />}
          <HStack justifyContent="flex-end">
            <Button onPress={onClose}>Close</Button>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}
