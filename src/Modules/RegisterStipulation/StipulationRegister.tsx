import {Box} from 'native-base';
import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import data from '@src/static/RegisterStripulation.json';
import StipulationCheckBox from '@src/Atomic/RegisterStipulation/StipulationCheckBox';
import {FlatList} from 'react-native-gesture-handler';
import {useStipulationState} from '@src/hooks/stateHooks/useStipulationState';

interface List {
  title: string;
  content: string[];
}

interface StipulationRegisterProps {
  registerCheck: boolean;
  setRegisterCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StipulationRegister({
  registerCheck,
  setRegisterCheck,
}: StipulationRegisterProps) {
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
      <PanelItem
        title="회원가입약관"
        icon="file-text-o"
        titleSize={14}
        iconSize={14}
      />
      <Box h={200} overflow="scroll">
        <FlatList
          data={data.data}
          renderItem={renderItem}
          nestedScrollEnabled
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </Box>
      <StipulationCheckBox
        title="(필수) 회원가입약관의 내용에 동의합니다."
        check={registerCheck}
        onChange={setRegisterCheck}
      />
    </Box>
  );
}
