import {Box, Center, HStack, Button} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import {useRoute} from '@react-navigation/native';
import useQnADetailData from '@src/hooks/queryHooks/useQnADetailData';
import InfoPanel from '@src/Modules/QnADetail/InfoPanel';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import AnswerPanel from '@src/Modules/QnADetail/AnswerPanel';
import QnAButton from '@src/API/QnADetail/QnAButton';
import useDeleteQnA from '@src/hooks/queryHooks/useDeleteQnA';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {QnADetailProps} from '@Types/NavigationTypes';

const QnADetail = () => {
  const routeParams = useRoute().params as QnADetailProps;
  const QnAInfo = {
    KTShopID: routeParams.KTShopID,
    QNAID: routeParams.QNAID,
  };
  const {data} = useQnADetailData(QnAInfo);

  const deleteQnA = useDeleteQnA();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  // console.log(JSON.stringify(data, null, 2));

  const handleDelete = async () => {
    try {
      await deleteQnA.mutateAsync(QnAInfo);
      navigation.goBack();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <PanelItem
        title="1:1문의"
        icon="exclamation-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Box p={2} py={4}>
        <FontHeading fontSize={18}>
          [{data?.Category}] {data?.Subject}
        </FontHeading>
      </Box>
      <InfoPanel
        WriteName={data?.WriteName || ''}
        WriteHp={data?.WriteHp || ''}
        WriteDate={data?.WriteDate || ''}
      />
      <FontText p={4}>{data?.Content || '입력된 데이터가 없습니다.'}</FontText>
      {routeParams.Status === 0 && (
        <HStack justifyContent="flex-end">
          <QnAButton
            title="수정"
            icon="plus"
            onPress={() =>
              navigation.navigate('WriteQnA', {
                ...QnAInfo,
                Category: data?.Category,
                Subject: data?.Subject,
                Content: data?.Content,
                WriteName: data?.WriteName,
                WriteHp: data?.WriteHp,
                WriteEmail: data?.WriteEmail,
              })
            }
          />
          <QnAButton title="삭제" icon="close" onPress={handleDelete} />
        </HStack>
      )}
      <AnswerPanel />
      {routeParams.Status === 1 ? (
        <Center p={8} borderBottomWidth={1} borderBottomColor="#CCC">
          <FontHeading>{data?.AnswerSubject}</FontHeading>
          <FontText pt={7}>{data?.AnswerContent}</FontText>
        </Center>
      ) : (
        <Center p={8} borderBottomWidth={1} borderBottomColor="#CCC">
          <FontText>문의에 대한 답변을 준비 중입니다.</FontText>
        </Center>
      )}
      <Center mt={4}>
        <QnAButton
          title="목록"
          icon="list"
          onPress={() => navigation.goBack()}
        />
      </Center>
    </Box>
  );
};

export default withCommontLayout(QnADetail);
