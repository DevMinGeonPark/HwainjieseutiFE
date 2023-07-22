import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {HStack, Button} from 'native-base';

export default function AddSaleButton() {
  const [selection, setSelection] = useState<number>(1);
  const width = Dimensions.get('window').width;
  const margins = 18;
  const subText = [
    '출고가에서 공시지원금+대리점 추가지원금 15% 할인',
    '매월 기본요금에서 25%할인 (선택약정)',
  ];

  return (
    <View>
      <HStack space={2} ml={2} mt={3}>
        <Button
          // ml={3}
          width={width / 3 - margins}
          onPress={() => setSelection(1)}
          variant="outline"
          size="sm"
          borderWidth={selection === 1 ? 3 : 1}
          borderColor={selection === 1 ? 'primary.400' : 'muted.300'}
          _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
          적용
        </Button>
        <Button
          // ml={3}
          width={width / 3 - margins}
          onPress={() => setSelection(2)}
          variant="outline"
          size="sm"
          borderWidth={selection === 2 ? 3 : 1}
          borderColor={selection === 2 ? 'primary.400' : 'muted.300'}
          _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
          미적용
        </Button>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({});
