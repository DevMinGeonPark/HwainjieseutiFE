import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
interface Props {
  isSelected: boolean;
}

export default function SelectedButton(props: Props) {
  const {isSelected} = props;

  return isSelected ? (
    <Button
      ml={3}
      borderColor={'primary.400'}
      borderWidth={3}
      variant="outline"
      size="sm"
      _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
      기기변경
    </Button>
  ) : (
    <Button
      ml={3}
      variant="outline"
      size="sm"
      _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
      기기변경
    </Button>
  );
}

const styles = StyleSheet.create({});
