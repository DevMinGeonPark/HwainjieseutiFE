import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import RenderHtml from 'react-native-render-html';
import {useRoute} from '@react-navigation/native';
import {
  ProductData,
  ProductProps,
  SubPageBaseProps,
} from '@src/Types/ProductTypes';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import client from '@src/API/client';
import useProductData from '@src/hooks/queryHooks/useProductData';
import {ScrollView} from 'native-base';
import NoticePanel from '@src/Modules/Event/NoticePanel';
import {EventData} from '@src/Types/ProductTypes';
import EventPanel from '@src/Modules/Event/EventPanel';

function isEventData(
  data: EventData | ProductData | undefined,
): data is EventData {
  return data !== undefined && 'TopNotice' in data;
}

const Event = () => {
  const routeParmas = useRoute().params as SubPageBaseProps;

  const {data} = useProductData(routeParmas);

  // console.log(JSON.stringify(data, null, 2));

  return (
    <ScrollView>
      <NoticePanel data={isEventData(data) ? data?.TopNotice : undefined} />
      {isEventData(data) &&
        data?.ListNotice.map(item => <EventPanel key={item.Uid} data={item} />)}
    </ScrollView>
  );
};

export default withCommontLayout(Event);

const styles = StyleSheet.create({});
