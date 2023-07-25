import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Heading, Text, Center} from 'native-base';
import BoxLabel from '@src/Atomic/Detail/BoxLabel';
import BoxTitle from '@src/Atomic/Detail/BoxTitle';
import {BodyType} from '@src/Types/RateCalculatorTypes';
import {getRateData} from '@src/API/Detail/getRateData';
import NonLineLabel from '@src/Atomic/Detail/NonLineLabel';
import RateBox from '@src/Atomic/Detail/RateBox';
import {MachineCalResType, ChargeCalResType} from '@Types/RateCalculatorTypes';
import {FontHeading} from '@src/Atomic/FontHeading';

export default function ChargeRateCalculator(Params: BodyType) {
  const [rateInfo, setRateInfo] = useState<ChargeCalResType>();

  useEffect(() => {
    getRateData(Params).then(data => setRateInfo(data as ChargeCalResType));
  }, [Params]);

  return (
    <>
      <Center borderBottomColor={'#DDD'} borderBottomWidth={1}>
        <FontHeading pb={3} size="lg">
          요금계산
        </FontHeading>
      </Center>
      <BoxTitle title="단말기 금액" borderWidth={1} />
      <BoxLabel
        label="출고가"
        Rate={rateInfo?.ChgFactory.toString() || ''}
        fontColor={'black'}
      />
      <BoxLabel
        label="KT공식몰 추가할인"
        Rate={'-' + rateInfo?.ChgKTmalldiscount.toString() || ''}
        fontColor={'#d71826'}
      />
      <BoxLabel
        label="할부원금"
        Rate={rateInfo?.ChgMonthlyPlan.toString() || ''}
        fontColor={'black'}
      />
      {/* 버그 : 포인트 수정하기 */}
      <BoxLabel
        label="마이포인트"
        Rate={rateInfo?.ChgMyPoint || ''}
        fontColor={'red'}
      />
      <BoxTitle title="요금제 금액" borderWidth={1} />
      <BoxLabel
        label={rateInfo?.ChgNm.toString() || ''}
        Rate={rateInfo?.ChgNmRate.toString() || ''}
        fontColor={'red'}
      />
      <BoxLabel
        label="요금할인(약정)"
        Rate={rateInfo?.ChgDiscountContract.toString() || ''}
        fontColor={'#d71826'}
      />
      <BoxLabel
        label="요금할인(추가)"
        Rate={'-' + rateInfo?.ChgDiscountAdd || ''}
        fontColor={'#d71826'}
      />
      <BoxLabel
        label="할인 후 금액"
        Rate={rateInfo?.ChgNmRateDiscount.toString() || ''}
        fontColor={'red'}
      />
      <BoxTitle title="월 납부 금액" borderWidth={0} />
      <NonLineLabel
        label="월할부원금"
        Rate={rateInfo?.ChgContractMonthChg.toString() || ''}
      />
      <NonLineLabel
        label="할부이자"
        Rate={rateInfo?.ChgContractMonthInterest.toString() || ''}
      />
      <NonLineLabel
        label="요금제 월납부금"
        Rate={rateInfo?.ChgContractMonthRate.toString() || ''}
      />
      <RateBox Rate={rateInfo?.ChgContractMonthTotal.toString() || ''} />
    </>
  );
}

const styles = StyleSheet.create({});