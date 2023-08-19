import {Box, FlatList, ScrollView} from 'native-base';
import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import data from '@src/static/RegisterStripulation.json';
import {FontHeading} from '@src/Atomic/FontHeading';
import StipulationCheckBox from '@src/Atomic/RegisterStipulation/StipulationCheckBox';

interface List {
  title: string;
  content: string[];
}

export default function StipulationRegister() {
  const renderItem = ({item}: {item: List}) => (
    <Box p={3}>
      <FontHeading>{item.title}</FontHeading>
      {item.content.map(i => (
        <FontText>{i}</FontText>
      ))}
    </Box>
  );

  return (
    <Box borderTopWidth={1} borderTopColor="#CCC">
      <PanelItem
        title="회원가입약관"
        icon="file-text-o"
        titleSize={14}
        iconSize={14}
      />
      <ScrollView h={200}>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <StipulationCheckBox title="회원가입약관의 내용에 동의합니다." />
    </Box>
  );
}
