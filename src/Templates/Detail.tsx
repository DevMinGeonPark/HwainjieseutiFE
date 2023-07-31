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
import getItemInfo from '@src/API/Detail/getItemInfo';
import getPlanDesc from '@src/API/Detail/getPlanDesc';
import MachineRateCalculator from '@src/Modules/Detail/MachineRateCalculator';
import {useUserState} from '@src/contexts/UserContext';
import ProductPiece from '@src/Modules/Detail/ProductPiece';

import {ItemDetail} from '@src/Types/DetailTypes';
import ChargeRateCalculator from '@src/Modules/Detail/ChargeRateCalculator';
import ShareModal from '@src/Modules/Detail/ShareModal';
import {FontText} from '@src/Atomic/FontText';
import InfoTab from '@src/Modules/Detail/InfoTab';
import {ScrollViewContext} from '@src/contexts/ScrollViewContext';
import DetailTitle from '@src/Modules/Detail/DetailTitle';
import DetailInfo from '@src/Modules/Detail/DetailInfo';
import ShareModalButtonModule from '@src/Modules/Detail/ShareModalButtonModule';
import RateTypeUI from '@src/Modules/Detail/RateTypeUI';

const Detail = () => {
  const [itemInfo, setItemInfo] = useState<ItemDetail>();
  const [plan, setPlan] = useState<string>('212121');
  const [planDesc, setPlanDesc] = useState<string>('');

  const [supType, setSupType] = useState<string>('Machine');
  const [installment, setInstallment] = useState<string>('24');
  const [ktDiscount, setKtDiscount] = useState<string>('Y');
  const [user] = useUserState();

  const [showModal, setShowModal] = useState(false);

  const [infoTabSetter, setInfoTabSetter] = useState(true);

  const {scrollViewRef} = useContext(ScrollViewContext);

  const width = useWindowDimensions().width - 20;

  const routeParams = useRoute().params as any;

  useEffect(() => {
    getItemInfo(routeParams.it_id, routeParams.MenuVar).then(data =>
      setItemInfo(data),
    );
    setPlan('212121');
    scrollViewRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [routeParams.num, routeParams.it_id, routeParams.MenuVar, scrollViewRef]);

  useEffect(() => {
    if (plan.length !== 0 && itemInfo?.RateCode) {
      getPlanDesc(itemInfo.RateCode, plan).then(desc => setPlanDesc(desc));
    }
  }, [plan, itemInfo]);

  return (
    <Box>
      <DetailTitle name={routeParams.name || ''} />
      {itemInfo?.ItemImgUrl && (
        <Image
          source={{uri: itemInfo?.ItemImgUrl}}
          alt="product Image"
          size={width}
        />
      )}
      <DetailInfo
        productTitle={itemInfo?.ItemName || ''}
        productColors={itemInfo?.ItemColor || ''}
      />
      <ShareModalButtonModule setShowModal={setShowModal} />
      <RateTypeUI heading="가입형태">
        <SignTypeButtons
          regiTypes={itemInfo?.RegiType || []}
          route={routeParams}
        />
      </RateTypeUI>
      <RateTypeUI heading="지원형태">
        <SupTypeButtons
          SupportType={itemInfo?.SupportType || []}
          setSupType={setSupType}
          route={routeParams}
        />
      </RateTypeUI>
      <RateTypeUI heading="할부개월">
        <InstallmentButtons
          ForMonth={itemInfo?.ForMonth || []}
          setInstallment={setInstallment}
          route={routeParams}
        />
      </RateTypeUI>
      <RateTypeUI heading="요금제 선택">
        <PlanSelector
          RatePlans={itemInfo?.RatePlan || []}
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
          {itemInfo?.RevMethod?.[0]?.Title || 'Title unavailable'}
        </Button>
        <FontText mt={1}>
          {itemInfo?.RevMethod?.[0]?.ClickComment || 'ClickComment unavailable'}
        </FontText>
      </RateTypeUI>

      <RateTypeUI heading="KT공식몰 추가할인">
        <KTDiscountButtons
          KTDiscount={itemInfo?.KTDiscount || []}
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
        {supType === 'Machine' ? (
          <MachineRateCalculator
            ItemCode={itemInfo?.ItemCode || routeParams.it_id}
            Vol={plan}
            SupportTypeVol={supType}
            KTDiscount={ktDiscount}
            ForMonth={installment}
            UserID={user?.UserId || ''}
          />
        ) : (
          <ChargeRateCalculator
            ItemCode={itemInfo?.ItemCode || routeParams.it_id}
            Vol={plan}
            SupportTypeVol={supType}
            KTDiscount={ktDiscount}
            ForMonth={installment}
            UserID={user?.UserId || ''}
          />
        )}
      </Box>

      <Box borderTopWidth={2} borderTopColor={'primary.400'}>
        <InfoTab
          html={htmlPreprocesser(
            (infoTabSetter
              ? itemInfo?.BuyBenefit[0].Common
              : itemInfo?.CommAttn) || '',
          )}
          infoTabSetter={infoTabSetter}
          setInfoTabSetter={setInfoTabSetter}
        />
      </Box>
      <ProductPiece
        MenuType={routeParams.MenuType}
        MenuVar={routeParams.MenuVar}
      />
      {showModal && (
        <ShareModal
          productId={itemInfo?.ItemCode || ''}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Box>
  );
};
export default withCommontLayout(Detail, {showFixBar: true});
