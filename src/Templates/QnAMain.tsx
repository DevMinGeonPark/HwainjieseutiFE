import {Box, Pressable} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import QnASearch from '@src/Modules/QnAMain/QnASearch';
import {FontText} from '@src/Atomic/FontText';
import InquiryPanel from '@src/Modules/QnAMain/InquiryPanel';
import QnAPost from '@src/Modules/QnAMain/QnAPost';
import InquiryWriteButton from '@src/Atomic/CustomerInquiry/InquiryWriteButton';
import useQnAMainData from '@src/hooks/queryHooks/useQnAMainData';
import {ParamProps} from '@src/Types/QnAMainTypes';
import {useUserState} from '@src/contexts/UserContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import {WriteDatePreprocesser} from '@Utils/WriteDatePreprocesser';
import {useFocusEffect} from '@react-navigation/native';

const QnAMain = () => {
  const [user] = useUserState();
  const [params, setParams] = React.useState<ParamProps>({
    KTShopID: user?.UserId || '',
    Category: 'A' || '',
  });
  const {data, refetch} = useQnAMainData(params);
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  useFocusEffect(
    // navigation이 일어나면 다시 패칭
    React.useCallback(() => {
      refetch();
    }, []),
  );

  return (
    <Box>
      <PanelItem
        title="1:1문의"
        icon="exclamation-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <QnASearch setParams={setParams} />
      <InquiryPanel />
      {data?.QNAList?.map((item, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate('QnADetail', {
              QNAID: item.QNAID,
              KTShopID: user?.UserId || '',
              Status: item.Status,
            })
          }>
          <QnAPost
            key={index}
            QNAID={item.QNAID}
            Category={item.Category}
            Subject={item.Subject}
            WriteDate={WriteDatePreprocesser(item.WriteDate)}
            WriteName={item.WriteName}
            Status={item.Status}
          />
        </Pressable>
      ))}
      <InquiryWriteButton />
    </Box>
  );
};

export default React.memo(withCommontLayout(QnAMain));
