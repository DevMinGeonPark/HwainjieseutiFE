import {Box, ScrollView, HStack} from 'native-base';
import React, {useState} from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import data from '@src/static/PersonalStripulation.json';
import {FontHeading} from '@src/Atomic/FontHeading';
import StipulationCheckBox from '@src/Atomic/RegisterStipulation/StipulationCheckBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Table from '@src/Atomic/RegisterStipulation/Table';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useStipulationState} from '@src/hooks/stateHooks/useStipulationState';

interface List {
  title: string;
  content: string[];
}

interface StipulationRegisterProps {
  personalCheck: boolean;
  setPersonalCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StipulationPersonal({
  personalCheck,
  setPersonalCheck,
}: StipulationRegisterProps) {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const renderItem = ({item}: {item: List}) => (
    <Box p={3}>
      <FontText color="#0083B9" fontWeight="bold">
        {item.title}
      </FontText>
      {item.content.map((text, index) => (
        <FontText key={`${item.title}-${index}`}>{text}</FontText>
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
        <Pressable onPress={() => setShowDetail(!showDetail)}>
          <FontText>전문보기</FontText>
        </Pressable>
      </HStack>
      {showDetail && (
        <Box h={200} overflow="scroll">
          <FlatList
            data={data.data}
            renderItem={renderItem}
            nestedScrollEnabled
            keyExtractor={(item, index) => `list-${index}`}
          />
        </Box>
      )}
      <Table />
      <StipulationCheckBox
        title="(필수) 개인정보처리방침안내의 내용에 동의합니다."
        check={personalCheck}
        onChange={setPersonalCheck}
      />
    </Box>
  );
}
