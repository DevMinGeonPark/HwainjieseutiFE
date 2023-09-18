import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
// import { CommonSubPageProps } from '@src/Types/ProductTypes';
import {CommonProps} from '@src/Types/CommonTypes';
import useProductData from '@src/hooks/queryHooks/useProductData';
import NoticePanel from '@src/Modules/Event/NoticePanel';
import {EventData} from '@src/Types/ProductTypes';
import EventPanel from '@src/Modules/Event/EventPanel';
import {Box} from 'native-base';
import {isEventData} from '@src/Types/ProductTypes';

const Event = () => {
  const routeParmas = useRoute().params as CommonProps;
  const productProps = {
    MenuType: routeParmas?.MenuType || '',
    MenuVar: routeParmas?.MenuVar || '',
  } as CommonProps;
  const {data} = useProductData(productProps);
  // console.log(JSON.stringify(data, null, 2));r

  return (
    <Box>
      <NoticePanel data={isEventData(data) ? data?.TopNotice : undefined} />
      {isEventData(data) &&
        data?.ListNotice.map(item => <EventPanel key={item.Uid} data={item} />)}
    </Box>
  );
};

export default React.memo(withCommontLayout(Event));
