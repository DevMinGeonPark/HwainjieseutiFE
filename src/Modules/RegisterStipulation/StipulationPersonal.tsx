import {Box, FlatList, ScrollView, HStack} from 'native-base';
import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import data from '@src/static/RegisterStripulation.json';
import {FontHeading} from '@src/Atomic/FontHeading';
import StipulationCheckBox from '@src/Atomic/RegisterStipulation/StipulationCheckBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Table from '@src/Atomic/RegisterStipulation/Table';

interface List {
  title: string;
  content: string[];
}

export default function StipulationPersonal() {
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
      <HStack
        p={3}
        bg="#FAFAFA"
        borderBottomWidth={1}
        borderBottomColor="#CCC"
        alignItems="center"
        justifyContent="space-between">
        <HStack space={1}>
          <Icon name="user" size={14} color="black" />
          <FontHeading fontSize={14}>개인정보처리방침안내</FontHeading>
        </HStack>
        <FontText>전문보기</FontText>
      </HStack>
      <Table />
      {/* <ScrollView h={200}>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView> */}
      <StipulationCheckBox title="회원가입약관의 내용에 동의합니다." />
    </Box>
  );
}
