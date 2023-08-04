import react from 'react';
import {Box, Button, HStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {FontText} from '@src/Atomic/FontText';
import {Linking} from 'react-native';

interface SiteInfoFormProps {
  userName: string;
}

export default function PersonalInfoForm({userName}: SiteInfoFormProps) {
  return (
    <Box
      mt={6}
      pb={5}
      borderTopColor="#CCC"
      borderTopWidth={1}
      borderBottomWidth={1}>
      <PanelItem
        title="개인정보 입력"
        icon="user"
        titleSize={14}
        iconSize={14}
      />
      <FormItem
        title="아이디"
        data={userName}
        isDisabled={true}
        type="text"
        icon="check"
      />
      <HStack space={1} mx={3} mb={2}>
        <Button size="sm" bg="black">
          아이핀 본인확인
        </Button>
        <Button
          size="sm"
          bg="black"
          onPress={() => {
            Linking.openURL(
              'https://www.sktpass.com/applink/sktauth?agentTID=V49440000000&appToken=1234',
            );
          }}>
          휴대폰 본인확인
        </Button>
      </HStack>
      <FontText fontSize={12} px={3} color="#777777">
        아이핀 본인확인 후에는 이름이 자동 입력되고 휴대폰 본인확인 후에는
        이름과 휴대폰번호가 자동 입력되어 수동으로 입력할수 없게 됩니다.
      </FontText>
      <FormItem
        title="생년월일"
        data={''}
        isDisabled={false}
        type="text"
        icon="user"
      />
      <FormItem
        title="전화번호(개통번호)"
        data={''}
        isDisabled={false}
        type="text"
        icon="check"
      />
      <FormItem
        title="휴대폰번호"
        data={''}
        isDisabled={false}
        type="text"
        icon="check"
      />
    </Box>
  );
}
