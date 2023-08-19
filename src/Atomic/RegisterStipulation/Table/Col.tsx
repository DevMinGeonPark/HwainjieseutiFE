import {Box, HStack} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {StyleSheet} from 'react-native';
import React from 'react';
import Item from './Item';

interface ColProps {
  colItem: string[];
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Col: React.FC<ColProps> = ({colItem}) => {
  return (
    <HStack>
      {colItem.map((i, index) => (
        // <Box style={styles.cell}>
        //   <FontText>{i}</FontText>
        // </Box>
        <Item key={index} text={i} isBold={false} />
      ))}
    </HStack>
  );
};

export default Col;
