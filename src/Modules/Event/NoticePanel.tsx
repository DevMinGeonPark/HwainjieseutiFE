import {FontHeading} from '@src/Atomic/FontHeading';
import {Box} from 'native-base';
import React from 'react';
import NoticePanelItem from '@src/Atomic/Event/NoticePanelItem';
import {TopNotice} from '@src/Types/ProductTypes';

interface NoticePanelProps {
  data: TopNotice[] | undefined;
}

export default function NoticePanel({data}: NoticePanelProps) {
  return (
    <Box my={5}>
      <Box p={3} bg="#f5f5f5" borderWidth={1} borderColor="#ddd">
        <FontHeading fontSize={16}>Notice</FontHeading>
      </Box>
      {data?.map(item => (
        <NoticePanelItem
          key={item.Uid}
          uid={item.Uid}
          title={item.Title}
          date={item.WriteDate}
        />
      ))}
    </Box>
  );
}
