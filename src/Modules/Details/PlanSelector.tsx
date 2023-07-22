import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Select, CheckIcon, Box} from 'native-base';
import {RatePlan, SubList} from '@Types/DetailTypes';

interface PlanSelectorProps {
  RatePlans: RatePlan[];
  plan: string;
  setPlan: React.Dispatch<React.SetStateAction<string>>;
}

export default function PlanSelector({
  RatePlans,
  plan,
  setPlan,
}: PlanSelectorProps) {
  // console.log(RatePlan);
  const data = RatePlans.flat(); //쓸데없는 배열 1차원 삭제

  const render = () => {
    const result = [] as any;
    data.map((ratePlan, index) => {
      result.push(
        <Select.Item
          key={index}
          label={ratePlan.RateDivi}
          value={ratePlan.RateDivi}
          isDisabled={true}
        />,
      );
      ratePlan.SubList.map((subList, index) => {
        result.push(
          <Select.Item key={index} label={subList.Var} value={subList.Vol} />,
        );
      });
    });
    return result;
  };

  return (
    <Box borderRadius="md">
      <Select
        placeholder="요금제를 선택해주세요."
        selectedValue={plan}
        minWidth="200"
        _actionSheet={{useRNModal: true}}
        marginX={3}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        borderRadius="2xl"
        borderWidth="2"
        borderColor="primary.400"
        onValueChange={itemValue => setPlan(itemValue)}>
        {render().map((item: any) => item)}
      </Select>
    </Box>
  );
}

const styles = StyleSheet.create({});
