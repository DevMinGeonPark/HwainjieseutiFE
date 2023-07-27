import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import withCommontLayout from './withCommontLayout';
import {
  Center,
  Heading,
  Divider,
  Button,
  Image,
  Container,
  Box,
  Pressable,
  Modal,
  FormControl,
} from 'native-base';
import {htmlPreprocesser} from '@Utils/htmlPreprocesser';
import {useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignTypeButtons from '../Modules/Detail/SignTypeButtons';
import SupTypeButtons from '../Modules/Detail/SupTypeButtons';
import InstallmentButtons from '../Modules/Detail/InstallmentButtons';
import PlanSelector from '@src/Modules/Detail/PlanSelector';
import AddSaleButton from '@src/Modules/Detail/AddSaleButton';
import ColorModule from '@src/Modules/Detail/ColorModule';
import getItemInfo from '@src/API/Detail/getItemInfo';
import getPlanDesc from '@src/API/Detail/getPlanDesc';
import MachineRateCalculator from '@src/Modules/Detail/MachineRateCalculator';
import {useUserState} from '@src/contexts/UserContext';
import RenderHTML from 'react-native-render-html';
import ProductPiece from '@src/Modules/Detail/ProductPiece';
import {useNavigation} from '@react-navigation/native';

import {ItemDetail} from '@src/Types/DetailTypes';
import ChargeRateCalculator from '@src/Modules/Detail/ChargeRateCalculator';
import ShareModal from '@src/Modules/Detail/ShareModal';
import {FontText} from '@src/Atomic/FontText';
import InfoTab from '@src/Modules/Detail/InfoTab';
import {ScrollViewContext} from '@src/contexts/ScrollViewContext';

const Detail = () => {
  const route = useRoute();
  const routeParams = route.params as any;
  const width = Dimensions.get('window').width;

  const navigation = useNavigation();

  const [itemInfo, setItemInfo] = useState<ItemDetail>();
  const [plan, setPlan] = useState<string>('212121');
  const [planDesc, setPlanDesc] = useState<string>('');

  const [supType, setSupType] = useState<string>('Machine');
  const [installment, setInstallment] = useState<string>('24');
  const [addSale, setAddSale] = useState<string>('Y');
  const [user] = useUserState();

  const [showModal, setShowModal] = useState(false);

  const [infoTabSetter, setInfoTabSetter] = useState(true);

  const {scrollViewRef} = useContext(ScrollViewContext);

  useEffect(() => {
    getItemInfo(routeParams.it_id, routeParams.MenuVar).then(data =>
      setItemInfo(data),
    );
    scrollViewRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [routeParams.num]);

  useEffect(() => {
    if (plan.length !== 0 && itemInfo?.RateCode) {
      getPlanDesc(itemInfo.RateCode, plan).then(desc => setPlanDesc(desc));
    }
  }, [plan, itemInfo]);

  // console.log(JSON.stringify(itemInfo, null, 2));
  // console.log(routeParams);

  return (
    <ScrollView>
      {showModal && (
        <ShareModal
          productId={itemInfo?.ItemCode || ''}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <Center m={10} mx={140}>
        <Heading>{routeParams.name}</Heading>
        <Divider mt="2" bg="muted.800" width={35} />
      </Center>
      {itemInfo?.ItemImgUrl && (
        <Image
          source={{uri: itemInfo?.ItemImgUrl}}
          alt="product Image"
          size={width - 20}
        />
      )}
      <Center my={3}>
        <Heading size="md">{itemInfo?.ItemName}</Heading>
        <Divider my="3" bg="muted.800" width={260} />
        <ColorModule props={itemInfo?.ItemColor} />
      </Center>
      <Pressable onPress={() => setShowModal(true)}>
        <Center m={3}>
          <FontAwesome name="share-square-o" size={50} color="black" />
          <Heading size="xs">공유하기</Heading>
        </Center>
      </Pressable>
      <View>
        <Heading ml={3}>가입형태</Heading>
        <SignTypeButtons regiTypes={itemInfo?.RegiType || []} />
      </View>
      <View>
        <Heading ml={3}>지원형태</Heading>
        <SupTypeButtons
          SupportType={itemInfo?.SupportType || []}
          setSupType={setSupType}
        />
      </View>
      <View>
        <Heading ml={3}>할부개월</Heading>
        <InstallmentButtons
          ForMonth={itemInfo?.ForMonth || []}
          setInstallment={setInstallment}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Heading ml={3} my={3}>
          요금제선택
        </Heading>
        <PlanSelector
          RatePlans={itemInfo?.RatePlan || []}
          plan={plan}
          setPlan={setPlan}
        />
        <Container m={5} mt={3}>
          <Text>{planDesc}</Text>
        </Container>
      </View>

      <View>
        <Heading ml={3} mb={2}>
          수령방법
        </Heading>
        <Button
          ml={2}
          width={width / 4}
          onPress={() => {}}
          variant="outline"
          size="sm"
          borderWidth={3}
          borderColor={'primary.400'}
          _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}>
          {itemInfo?.RevMethod?.[0]?.Title || 'Title unavailable'}
        </Button>
        <FontText m={2}>
          {itemInfo?.RevMethod?.[0]?.ClickComment || 'ClickComment unavailable'}
        </FontText>
      </View>
      <View>
        <Heading ml={3}>KT공식몰 추가할인</Heading>
        <AddSaleButton
          KTDiscount={itemInfo?.KTDiscount || []}
          setAddSale={setAddSale}
        />
      </View>
      <Button
        m={2}
        my={5}
        bg={'primary.400'}
        variant={'solid'}
        _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}
        onPress={() => {}}>
        주문하기
      </Button>
      <Box borderTopWidth={2} borderTopColor={'primary.400'}>
        <Box mt={3}>
          {supType === 'Machine' ? (
            <MachineRateCalculator
              ItemCode={itemInfo?.ItemCode || routeParams.it_id}
              Vol={plan}
              SupportTypeVol={supType}
              KTDiscount={addSale}
              ForMonth={installment}
              UserID={user?.toString() || ''}
            />
          ) : (
            <ChargeRateCalculator
              ItemCode={itemInfo?.ItemCode || routeParams.it_id}
              Vol={plan}
              SupportTypeVol={supType}
              KTDiscount={addSale}
              ForMonth={installment}
              UserID={user?.toString() || ''}
            />
          )}
        </Box>
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
        ItemCode={routeParams.it_id}
      />
    </ScrollView>
  );
};

// export default React.memo(withCommontLayout(Detail));
export default React.memo(withCommontLayout(Detail, {showFixBar: true}));
