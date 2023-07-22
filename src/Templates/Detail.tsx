import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import withCommontLayout from './withCommontLayout';
import {
  Center,
  Heading,
  Divider,
  Circle,
  Button,
  HStack,
  Image,
  Container,
} from 'native-base';
import {useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignTypeButtons from '../Modules/Details/SignTypeButtons';
import SupTypeButtons from '../Modules/Details/SupTypeButtons';
import InstallmentButtons from '../Modules/Details/InstallmentButtons';
import PlanSelector from '@src/Modules/Details/PlanSelector';
import AddSaleButton from '@src/Modules/Details/AddSaleButton';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import {ItemDetail} from '@src/Types/DetailTypes';

import client from '@src/API/client';
import ColorModule from '@src/Modules/Details/ColorModule';

import getItemInfo from '@src/API/Detail/getItemInfo';
import getPlanDesc from '@src/API/Detail/getPlanDesc';

const Detail = () => {
  const route = useRoute();
  const routeParams = route.params as any;
  const width = Dimensions.get('window').width;

  const [itemInfo, setItemInfo] = useState<ItemDetail>();
  const [plan, setPlan] = useState<string>('');
  const [planDesc, setPlanDesc] = useState<string>('');

  useEffect(() => {
    getItemInfo(routeParams.it_id, routeParams.ca_id).then(data =>
      setItemInfo(data),
    );
  }, [routeParams.num]);

  useEffect(() => {
    if (plan.length !== 0 && itemInfo?.RateCode) {
      getPlanDesc(itemInfo.RateCode, plan).then(desc => setPlanDesc(desc));
    }
  }, [plan]);

  return (
    <ScrollView>
      <Center m={10} mx={140}>
        <Heading>삼성</Heading>
        <Divider mt="2" bg="muted.800" width={35} />
      </Center>
      <Image
        source={{uri: itemInfo?.ItemImgUrl}}
        alt="product Image"
        size={width - 20}
      />
      <Center my={3}>
        <Heading size="md">{itemInfo?.ItemName}</Heading>
        <Divider my="3" bg="muted.800" width={260} />
        <ColorModule props={itemInfo?.ItemColor} />
      </Center>
      <Center m={3}>
        <FontAwesome name="share-square-o" size={50} color="black" />
        <Heading size="xs">공유하기</Heading>
      </Center>
      <View>
        <Heading ml={3}>가입형태</Heading>
        <SignTypeButtons regiTypes={itemInfo?.RegiType || []} />
      </View>
      <View>
        <Heading ml={3}>지원형태</Heading>
        <SupTypeButtons SupportType={itemInfo?.SupportType || []} />
      </View>
      <View>
        <Heading ml={3}>할부개월</Heading>
        <InstallmentButtons ForMonth={itemInfo?.ForMonth || []} />
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
        <Heading ml={3}>수령방법</Heading>
        <Button
          ml={2}
          width={width / 4}
          onPress={() => {}}
          variant="outline"
          size="sm"
          borderWidth={3}
          borderColor={'primary.400'}
          _text={{fontSize: 'md', fontWeight: 'bold', color: 'black'}}>
          택배
        </Button>
      </View>
      <View>
        <Heading ml={3}>수령방법</Heading>
        <AddSaleButton />
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
    </ScrollView>
  );
};

export default withCommontLayout(Detail);

const styles = StyleSheet.create({});
