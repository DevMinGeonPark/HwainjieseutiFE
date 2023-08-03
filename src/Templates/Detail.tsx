import {useWindowDimensions} from 'react-native';
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
import {ScrollViewContext} from '@src/contexts/ScrollViewContext';
import DetailTitle from '@src/Modules/Detail/DetailTitle';
import DetailInfo from '@src/Modules/Detail/DetailInfo';
import ShareModalButtonModule from '@src/Modules/Detail/ShareModalButtonModule';
import RateTypeUI from '@src/Modules/Detail/RateTypeUI';
import useItemInfoData from '@src/hooks/queryHooks/useItemInfoData';
import {DetailScreenProps} from '@src/Types/NavigationTypes';
import RateCalculator from '@src/Modules/Detail/RateCalculator';

const Detail = () => {
  const [plan, setPlan] = useState<string>('212121');
  const [planDesc, setPlanDesc] = useState<string>('');
  const [supType, setSupType] = useState<string>('Machine');
  const [installment, setInstallment] = useState<string>('24');
  const [ktDiscount, setKtDiscount] = useState<string>('Y');
  const [user] = useUserState();
  const [showModal, setShowModal] = useState<boolean>(false);

  const {scrollViewRef} = useContext(ScrollViewContext);
  const width = useWindowDimensions().width - 20;
  const routeParams = useRoute().params as DetailScreenProps;

  const {data} = useItemInfoData({
    ItemCode: routeParams.it_id,
    CategorieCode: routeParams.MenuVar,
  });

  console.log(JSON.stringify(data, null, 2));

  useEffect(() => {
    setPlan('212121');
    scrollViewRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [data]);

  useEffect(() => {
    if (plan.length !== 0 && data?.RateCode) {
      getPlanDesc(data.RateCode, plan).then(desc => setPlanDesc(desc));
    }
  }, [plan, data]);

  return (
    <Box>
      <DetailTitle name={routeParams.name || ''} />
      {data?.ItemImgUrl && (
        <Image
          source={{uri: data?.ItemImgUrl}}
          alt="product Image"
          size={width}
        />
      )}
      <DetailInfo
        productTitle={data?.ItemName || ''}
        productColors={data?.ItemColor || ''}
      />
      <ShareModalButtonModule setShowModal={setShowModal} />
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
          borderColor={'primary.400'}
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
        bg={'primary.400'}
        variant={'solid'}
        _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}
        onPress={() => {}}>
        주문하기
      </Button>

      <Box borderTopWidth={2} borderTopColor={'primary.400'} pt={3}>
        <RateCalculator
          ItemCode={data?.ItemCode || routeParams.it_id}
          Vol={plan}
          SupportTypeVol={supType}
          KTDiscount={ktDiscount}
          ForMonth={installment}
          UserID={user?.UserId || ''}
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
      {showModal && (
        <ShareModal
          productId={data?.ItemCode || ''}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Box>
  );
};
export default withCommontLayout(Detail, {showFixBar: true});
