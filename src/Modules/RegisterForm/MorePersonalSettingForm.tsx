import React from 'react';
import {Box, Checkbox, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import {FontText} from '@src/Atomic/FontText';
import {FontHeading} from '@src/Atomic/FontHeading';

interface MorePersonalSettingFormProps {
  maling: number;
  setMaling: React.Dispatch<React.SetStateAction<number>>;
  openInfo: number;
  setOpenInfo: React.Dispatch<React.SetStateAction<number>>;
}

export default function MorePersonalSettingForm({
  maling,
  setMaling,
  openInfo,
  setOpenInfo,
}: MorePersonalSettingFormProps) {
  const isChecked = maling === 1;

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
      {/* <Box p={3}>
        <FontHeading fontSize={12}>회원아이콘</FontHeading>
        <FontText fontSize={12} color="#777777">
          이미지크기는 가로22픽셀, 세로22픽셀 이하로 해주세요. gif만 가능하며
          용량은 5,000바이트 이하만 등록됩니다.
        </FontText>
      </Box> */}
      <VStack p={3} space={3}>
        <FontHeading fontSize={14}>메일링서비스</FontHeading>
        <Checkbox
          value={maling.toString()}
          isChecked={isChecked}
          onChange={(isChecked: boolean) => handleMaling(isChecked)}>
          <FontText ml={-1}>정보메일을 받겠습니다.</FontText>
        </Checkbox>
        <FontHeading fontSize={14}>정보공개</FontHeading>
        <Checkbox
          value={openInfo.toString()}
          isChecked={isChecked}
          onChange={(isChecked: boolean) => handleMaling(isChecked)}>
          <FontText ml={-1}>
            다른분들이 나의 정보를 볼 수 있도록 합니다.
          </FontText>
        </Checkbox>
        <FontText fontSize={12} color="#777777" px={3}>
          정보공개를 바꾸시면 앞으로 0일 이내에는 변경이 안됩니다.
        </FontText>
      </VStack>

      {/* <FontHeading fontSize={12} px={3} pt={3}>
        자동등록방지
      </FontHeading> */}
      {/* Chapchar 추가하기 */}
    </Box>
  );
}
