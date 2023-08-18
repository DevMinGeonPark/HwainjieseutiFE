import React from 'react';
import {Box, Checkbox, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import {FontHeading} from '@src/Atomic/FontHeading';
import {useRegisterForm} from '@src/hooks/stateHooks/useRegisterForm';

export default function MorePersonalSettingForm() {
  const {maling, setMaling, openInfo, setOpenInfo} = useRegisterForm();

  const isMalingChecked = maling === 1;
  const isOpenInfoChecked = openInfo === 1;

  const handleMaling = (isChecked: boolean) => {
    setMaling(isChecked ? 1 : 0);
  };

  const handleOpenInfo = (isChecked: boolean) => {
    setOpenInfo(isChecked ? 1 : 0);
  };

  return (
    <Box
      mt={6}
      pb={5}
      borderTopColor="#CCC"
      borderTopWidth={1}
      borderBottomWidth={1}>
      <PanelItem
        title="기타 개인설정"
        icon="gear"
        titleSize={14}
        iconSize={14}
      />
      <VStack p={3} space={3}>
        <FontHeading fontSize={14}>메일링서비스</FontHeading>
        <Checkbox
          value={maling.toString()}
          isChecked={isMalingChecked}
          onChange={(isChecked: boolean) => handleMaling(isChecked)}>
          <FontText ml={-1}>정보메일을 받겠습니다.</FontText>
        </Checkbox>
        <FontHeading fontSize={14}>정보공개</FontHeading>
        <Checkbox
          value={openInfo.toString()}
          isChecked={isOpenInfoChecked}
          onChange={(isChecked: boolean) => handleOpenInfo(isChecked)}>
          <FontText ml={-1}>
            다른분들이 나의 정보를 볼 수 있도록 합니다.
          </FontText>
        </Checkbox>
        <FontText fontSize={12} color="#777777" px={3}>
          정보공개를 바꾸시면 앞으로 0일 이내에는 변경이 안됩니다.
        </FontText>
      </VStack>
    </Box>
  );
}
