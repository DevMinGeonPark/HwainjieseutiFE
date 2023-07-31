import React, {useEffect} from 'react';
import {Select, CheckIcon, Box} from 'native-base';
import {RatePlan} from '@Types/DetailTypes';

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
    <Box borderRadius="md" my={2}>
      <Select
        placeholder="요금제를 선택해주세요."
        selectedValue={plan}
        _actionSheet={{useRNModal: true}}
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        borderRadius="2xl"
        borderWidth="2"
        borderColor="primary.400"
        onValueChange={itemValue => setPlan(itemValue)}>
        {render().map((item: any) => item)}
      </Select>
    </Box>
  );
}
