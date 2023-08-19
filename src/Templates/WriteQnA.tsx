import {Box, VStack, TextArea, Button, HStack, FormControl} from 'native-base';
import React from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import {FontHeading} from '@src/Atomic/FontHeading';
import CategorySelector from '@src/Modules/WriteQnA/CategorySelector';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmailInput from '@src/Atomic/WriteQnA/EmailInput';
import PhoneInput from '@src/Atomic/WriteQnA/PhoneInput';
import TitleInput from '@src/Atomic/WriteQnA/TitleInput';
import {ParamProps} from '@src/Types/WriteQnATypes';
import {useUserState} from '@src/contexts/UserContext';
import useWriteQnA from '@src/hooks/queryHooks/useWriteQnA';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {WriteQnAParamsProps} from '@Types/NavigationTypes';

const WriteQnA = () => {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const routeParams = useRoute().params as WriteQnAParamsProps;
  const [category, setCategory] = React.useState<string>(
    routeParams.Category || '',
  );
  const [email, setEmail] = React.useState<string>(
    routeParams.WriteEmail || '',
  );
  const [phone, setPhone] = React.useState<string>(routeParams.WriteHp || '');
  const [title, setTitle] = React.useState<string>(routeParams.Subject || '');
  const [content, setContent] = React.useState<string>(
    routeParams.Content || '',
  );
  const [user] = useUserState();
  // Validation
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isValidPhone, setIsValidPhone] = React.useState(true);
  const [isValidTitle, setIsValidTitle] = React.useState(true);
  const qnaWriteMutation = useWriteQnA();

  const handleSubmit = async () => {
    if (!isValidEmail || !isValidPhone || !isValidTitle || !category) {
      Alert.alert('입력값을 확인해주세요.');
      return;
    }
    const formData: ParamProps = {
      KTShopID: user?.UserId || '',
      QNAID: routeParams.QNAID || '',
      Category: category,
      Subject: title,
      WriteName: user?.UserNm || '',
      WriteEmail: email,
      WriteHp: phone,
      Content: content,
    };
    await qnaWriteMutation.mutateAsync(formData); // 수정된 부분
    console.log('formData', formData);
    navigation.navigate('QnAMain');
  };

  return (
    <Box>
      <PanelItem
        title="Secret"
        icon="exclamation-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Box bg="#FAFAFA" borderWidth={1} borderColor="#CCC" p={4} my={5}>
        <FontHeading fontSize={14}>글작성</FontHeading>
      </Box>
      <VStack space={4} px={2}>
        <CategorySelector category={category} setCategory={setCategory} />
        <EmailInput
          value={email}
          onChange={setEmail}
          onValidityChange={setIsValidEmail}
        />
        <PhoneInput
          title="Phone"
          value={phone}
          onChange={setPhone}
          onValidityChange={setIsValidPhone}
          isCerti={false}
        />
        <TitleInput
          value={title}
          onChange={setTitle}
          onValidityChange={setIsValidTitle}
        />
        <Box>
          <TextArea
            h={300}
            placeholder="내용을 입력해주세요. HTML은 입력불가능합니다."
            maxW="100%"
            autoCompleteType={undefined}
            onChangeText={text => setContent(text)}
          />
        </Box>
        <HStack space={2} justifyContent="center">
          <Button
            leftIcon={<Icon name="check" size={13} color="white" />}
            onPress={handleSubmit}
            bg="#000"
            _text={{color: 'white'}}>
            작성완료
          </Button>
          <Button
            onPress={() => navigation.navigate('QnAMain')}
            bg="#000"
            _text={{color: 'white'}}>
            목록
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default withCommontLayout(WriteQnA);
