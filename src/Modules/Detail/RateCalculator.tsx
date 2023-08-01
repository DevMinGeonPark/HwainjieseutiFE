import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Heading, Text, Center} from 'native-base';
import BoxLabel from '@src/Atomic/Detail/BoxLabel';
import BoxTitle from '@src/Atomic/Detail/BoxTitle';
import {
  ParamProps,
  isChargeCalculator,
  isMachineCalculator,
} from '@src/Types/RateCalculatorTypes';
import {getRateData} from '@src/API/Detail/getRateData';
import NonLineLabel from '@src/Atomic/Detail/NonLineLabel';
import RateBox from '@src/Atomic/Detail/RateBox';
import {MachineCalResType, ChargeCalResType} from '@Types/RateCalculatorTypes';
import {FontHeading} from '@src/Atomic/FontHeading';
import {useFixBarState} from '@src/contexts/FixBarStateContext';
import useRateData from '@src/hooks/queryHooks/useRateData';

export default function RateCalculator(Params: ParamProps) {
  const {data, status} = useRateData(Params);

  const [, setFixbarProps] = useFixBarState();
  useEffect(() => {
    if (status === 'success') {
      setFixbarProps({
        ChgContractMonthChg: data?.ChgContractMonthChg,
        ChgContractMonthRate: data?.ChgContractMonthRate,
        ChgContractMonthTotal: data?.ChgContractMonthTotal,
      });
    }
  }, [status, data, setFixbarProps]);
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
        Rate={data?.ChgFactory || 0}
        fontColor={'black'}
      />
      {isMachineCalculator(data) && (
        <>
          <BoxLabel
            label="공시지원금"
            Rate={data?.ChgSubsidy || 0}
            fontColor={'#d71826'}
          />
          <BoxLabel
            label="추가지원금"
            Rate={data?.ChgSubsidyAdd || 0}
            fontColor={'#d71826'}
          />
        </>
      )}
      <BoxLabel
        label="KT공식몰 추가할인"
        Rate={data?.ChgKTmalldiscount || 0}
        fontColor={'#d71826'}
      />
      <BoxLabel
        label="할부원금"
        Rate={data?.ChgMonthlyPlan || 0}
        fontColor={'black'}
      />
      {/* 버그 : 포인트 수정하기 */}
      <BoxLabel
        label="마이포인트"
        Rate={data?.ChgMyPoint || 0}
        fontColor={'red'}
      />
      <BoxTitle title="요금제 금액" borderWidth={1} />
      <BoxLabel
        label={data?.ChgNm || ''}
        Rate={data?.ChgNmRate || 0}
        fontColor={'red'}
      />
      {isChargeCalculator(data) && (
        <>
          <BoxLabel
            label="요금할인(약정)"
            Rate={data?.ChgDiscountContract || 0}
            fontColor={'#d71826'}
          />
          <BoxLabel
            label="요금할인(추가)"
            Rate={data?.ChgDiscountAdd || 0}
            fontColor={'#d71826'}
          />
        </>
      )}
      <BoxLabel
        label="할인 후 금액"
        Rate={data?.ChgNmRateDiscount || 0}
        fontColor={'red'}
      />
      <BoxTitle title="월 납부 금액" borderWidth={0} />
      <NonLineLabel label="월할부원금" Rate={data?.ChgContractMonthChg || 0} />
      <NonLineLabel
        label="할부이자"
        Rate={data?.ChgContractMonthInterest || 0}
      />
      <NonLineLabel
        label="요금제 월납부금"
        Rate={data?.ChgContractMonthRate || 0}
      />
      <RateBox Rate={data?.ChgContractMonthTotal || 0} />
    </>
  );
}
