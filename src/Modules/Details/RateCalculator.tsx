import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Heading, Box, Center} from 'native-base';
import BoxLabel from '@src/Atomic/Detail/BoxLabel';
import BoxTitle from '@src/Atomic/Detail/BoxTitle';
import {BodyType} from '@src/Types/RateCalculatorTypes';
import {getRateData} from '@src/API/Detail/getRateData';
// {
//     ItemCode,
//     Vol,
//     SupportTypeVol,
//     KTDiscount,
//     ForMonth,
//     UserID,
//   }
export default function RateCalculator(Params: BodyType) {
  useEffect(() => {
    getRateData(Params).then(res => console.log(JSON.stringify(res, null, 2)));
  }, []);

  return (
    <>
      <Center borderBottomColor={'#DDD'} borderBottomWidth={1}>
        <Heading pb={3} size="lg">
          요금계산
        </Heading>
      </Center>
      <BoxTitle title="단말기 금액" borderWidth={1} />
      <BoxLabel label="출고가" Rate="1720400" fontColor={'black'} />
      <BoxLabel label="공시지원금" Rate="-500000" fontColor={'red'} />
      <BoxLabel label="추가지원금" Rate="0" fontColor={'red'} />
      <BoxLabel label="KT공식몰 추가할인" Rate="-250000" fontColor={'red'} />
      <BoxLabel label="할부원금" Rate="933203" fontColor={'red'} />
      <BoxLabel label="마이포인트" Rate="37197" fontColor={'red'} />
      <BoxTitle title="요금제 금액" borderWidth={1} />
      <BoxLabel label="초이스 스패셜" Rate="37197" fontColor={'red'} />
      <BoxLabel label="할인 후 금액" Rate="37197" fontColor={'red'} />
      <BoxTitle title="월 납부 금액" borderWidth={0} />
    </>
  );
}

const styles = StyleSheet.create({});
