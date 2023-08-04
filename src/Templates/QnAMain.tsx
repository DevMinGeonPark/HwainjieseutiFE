import {Box, Button, Center, Divider, HStack} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import InquirySearch from '@src/Modules/CustomerInquiry/InquirySearch';
import {FontText} from '@src/Atomic/FontText';
import InquiryPanel from '@src/Modules/CustomerInquiry/InquiryPanel';
import QnAPostItem from '@src/Atomic/CustomerInquiry/QnAPostItem';
import InquiryWriteButton from '@src/Atomic/CustomerInquiry/InquiryWriteButton';
import useQnAMainData from '@src/hooks/queryHooks/useQnAMainData';
import {ParamProps} from '@src/Types/WriteQnATypes';
import {useUserState} from '@src/contexts/UserContext';

const QnAMain = () => {
  const [user] = useUserState();
  const {data} = useQnAMainData({
    KTShopID: user?.UserId,
    Category: 'A',
  } as ParamProps);

  console.log(JSON.stringify(data, null, 2));
  // data?.WriteDate.replace(
  //   /<span class="orangered">(.*?)<\/span>/,
  //   '$1',
  // );
  return (
    <Box>
      <PanelItem
        title="Secret"
        icon="exclamation-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <InquirySearch />
      <InquiryPanel />
      {data?.QNAList?.map((item, index) => (
        <QnAPostItem
          key={index}
          QNAID={item.QNAID}
          Category={item.Category}
          Subject={item.Subject}
          WriteDate={item.WriteDate}
          WriteName={item.WriteName}
        />
      ))}
      <InquiryWriteButton />
    </Box>
  );
};

export default React.memo(withCommontLayout(QnAMain));
