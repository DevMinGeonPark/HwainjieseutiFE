import {useWindowDimensions, Linking} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import withCommontLayout from './withCommontLayout';
import {Button, Image, Box} from 'native-base';
import {htmlPreprocesser} from '@Utils/htmlPreprocesser';
import {useRoute} from '@react-navigation/native';
import SignTypeButtons from '../Modules/Detail/SignTypeButtons';
import SupTypeButtons from '../Modules/Detail/SupTypeButtons';
import InstallmentButtons from '../Modules/Detail/InstallmentButtons';
import PlanSelector from '@src/Modules/Detail/PlanSelector';
import KTDiscountButtons from '@src/Modules/Detail/KTDiscountButtons';
import getPlanDesc from '@src/API/Detail/getPlanDesc';
import {useUserState} from '@src/contexts/UserContext';
import ProductPiece from '@src/Modules/Detail/ProductPiece';
import ShareModal from '@src/Modules/Detail/ShareModal';
import {FontText} from '@src/Atomic/FontText';
import InfoTab from '@src/Modules/Detail/InfoTab';
import DetailTitle from '@src/Modules/Detail/DetailTitle';
import DetailInfo from '@src/Modules/Detail/DetailInfo';
import ShareModalButtonModule from '@src/Modules/Detail/ShareModalButtonModule';
import RateTypeUI from '@src/Modules/Detail/RateTypeUI';
import useItemInfoData from '@src/hooks/queryHooks/useItemInfoData';
import {DetailScreenProps} from '@src/Types/NavigationTypes';
import RateCalculator from '@src/Modules/Detail/RateCalculator';
import {useFixBarState} from '@src/contexts/FixBarStateContext';
import {FlatListContext} from '@src/contexts/FlatListContext';

const Detail = () => {
  const [plan, setPlan] = useState<string>('212121');
  const [planDesc, setPlanDesc] = useState<string>('');
  const [supType, setSupType] = useState<string>('Machine');
  const [installment, setInstallment] = useState<string>('24');
  const [ktDiscount, setKtDiscount] = useState<string>('Y');
  const [user] = useUserState();

  const {flatListRef} = useContext(FlatListContext);

  const width = useWindowDimensions().width - 20;
  const routeParams = useRoute().params as DetailScreenProps;
  const [, setFixbarProps] = useFixBarState();

  const {data} = useItemInfoData({
    ItemCode: routeParams.it_id,
    CategorieCode: routeParams.MenuVar,
  });

  useEffect(() => {
    setPlan('212121');
    flatListRef?.current?.scrollToOffset({offset: 0, animated: true});
  }, [data]);

  useEffect(() => {
    if (plan.length !== 0 && data?.RateCode) {
      getPlanDesc(data.RateCode, plan).then(desc => setPlanDesc(desc));
    }
  }, [plan, data]);

  return (
    <Box>
      {data?.ItemColor && data?.ItemImgUrl && (
        <DetailInfo
          productTitle={data?.ItemName || ''}
          data={data?.ItemColor || []}
          errImg={data?.ItemImgUrl || ''}
        />
      )}
      <RateTypeUI heading="가입형태">
        <SignTypeButtons regiTypes={data?.RegiType || []} route={routeParams} />
      </RateTypeUI>
      <RateTypeUI heading="지원형태">
        <SupTypeButtons
          SupportType={data?.SupportType || []}
          setSupType={setSupType}
          route={routeParams}
        />
      </RateTypeUI>
      <RateTypeUI heading="할부개월">
        <InstallmentButtons
          ForMonth={data?.ForMonth || []}
          setInstallment={setInstallment}
          route={routeParams}
        />
      </RateTypeUI>
      <RateTypeUI heading="요금제 선택">
        <PlanSelector
          RatePlans={data?.RatePlan || []}
          plan={plan}
          setPlan={setPlan}
        />
        <Box ml={1} mt={3}>
          <FontText>{planDesc}</FontText>
        </Box>
      </RateTypeUI>
      <RateTypeUI heading="수령방법">
        <Button
          mt={2}
          onPress={() => {}}
          variant="outline"
          size="sm"
          borderWidth={3}
          borderColor={'#5ddfde'}
          _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}>
          {data?.RevMethod?.[0]?.Title || 'Title unavailable'}
        </Button>
        <FontText mt={1}>
          {data?.RevMethod?.[0]?.ClickComment || 'ClickComment unavailable'}
        </FontText>
      </RateTypeUI>
      <RateTypeUI heading="KT공식몰 추가할인">
        <KTDiscountButtons
          KTDiscount={data?.KTDiscount || []}
          setKtDiscount={setKtDiscount}
          route={routeParams}
        />
      </RateTypeUI>
      <Button
        m={2}
        my={5}
        bg={'#5ddfde'}
        variant={'solid'}
        _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}
        onPress={() => {
          Linking.openURL(data?.OrderPage || '');
        }}>
        주문하기
      </Button>
      <Box borderTopWidth={2} borderTopColor={'primary.400'} pt={3}>
        <RateCalculator
          ItemCode={data?.ItemCode || routeParams.it_id}
          Vol={plan}
          SupportTypeVol={supType}
          KTDiscount={ktDiscount}
          ForMonth={installment}
          UserID={user?.UserId || null}
          OrderPage={data?.OrderPage || ''}
        />
      </Box>
      <Box borderTopWidth={2} borderTopColor={'primary.400'}>
        <InfoTab
          BuyBenefit={data?.BuyBenefit || ''}
          CommAttn={data?.CommAttn || ''}
        />
      </Box>
      <ProductPiece
        MenuType={routeParams.MenuType}
        MenuVar={routeParams.MenuVar}
      />
    </Box>
  );
};
export default withCommontLayout(Detail, {showFixBar: true});
