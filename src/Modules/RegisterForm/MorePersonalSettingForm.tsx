import react from 'react';
import {Box, Button, HStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/RegisterForm/FormItem';
import {FontText} from '@src/Atomic/FontText';
import CheckBoxModule from '@src/Modules/RegisterForm/CheckBoxModule';
import {FontHeading} from '@src/Atomic/FontHeading';

interface SiteInfoFormProps {}

export default function MorePersonalSettingForm({}: SiteInfoFormProps) {
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
      <Box p={3}>
        <FontHeading fontSize={12}>회원아이콘</FontHeading>
        <FontText fontSize={12} color="#777777">
          이미지크기는 가로22픽셀, 세로22픽셀 이하로 해주세요. gif만 가능하며
          용량은 5,000바이트 이하만 등록됩니다.
        </FontText>
      </Box>
      <CheckBoxModule title="메일링서비스" label="정보 메일을 받겠습니다." />
      <CheckBoxModule
        title="정보공개"
        label="다른분들이 나의 정보를 볼 수 있도록 합니다."
      />
      <FontText fontSize={12} color="#777777" px={3}>
        정보공개를 바꾸시면 앞으로 0일 이내에는 변경이 안됩니다.
      </FontText>

      <FontHeading fontSize={12} px={3} pt={3}>
        자동등록방지
      </FontHeading>
      {/* Chapchar 추가하기 */}
    </Box>
  );
}
