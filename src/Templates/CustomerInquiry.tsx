import {Box, Button, Center, Divider, HStack} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import InquirySearch from '@src/Modules/CustomerInquiry/InquirySearch';
import {FontText} from '@src/Atomic/FontText';
import {FontHeading} from '@src/Atomic/FontHeading';
import InquiryPanel from '@src/Modules/CustomerInquiry/InquiryPanel';
import InquiryPostItem from '@src/Atomic/CustomerInquiry/InquiryPostItem';
import InquiryWriteButton from '@src/Atomic/CustomerInquiry/InquiryWriteButton';

const CustomerInquiry = () => {
  return (
    <Box>
      <PanelItem
        title="Secret"
        icon="exclamation-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <InquirySearch />
      <Center bg="black" p={1} mb={1}>
        <FontText color="#fff" fontSize={14}>
          전체(0)
        </FontText>
      </Center>
      <InquiryPanel />
      <InquiryPostItem />
      <InquiryWriteButton />
    </Box>
  );
};

export default React.memo(withCommontLayout(CustomerInquiry));
