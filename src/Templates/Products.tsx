import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {
  EventData,
  ProductData,
  ProductProps,
  SubPageBaseProps,
} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import ProductCard from '@src/Modules/ProductCard';
import client from '@src/API/client';
import {ItemList} from '@src/Types/MainDataTypes';
import LodingIndicator from '@src/Modules/LodingIndicator';

import useProductData from '@src/hooks/queryHooks/useProductData';
import {HStack} from 'native-base';

function isProductData(
  data: EventData | ProductData | undefined,
): data is ProductData {
  return data !== undefined && 'ItemList' in data;
}

const Products = () => {
  const route = useRoute();
  const routeParams = route.params as SubPageBaseProps;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  // const toast = useToast();
  // const queryClient = useQueryClient();

  const [params, setParams] = React.useState<ProductProps>({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
    sort: 'it_update_tme',
    sortodr: 'desc',
  });

  // 테스트 코드
  // const {data, isLoading} = useProductData(params);

  // if (isLoading) return <LodingIndicator count={4} />;

  // 테스트 코드와 속도를 비교하여 어떤게 더 좋은가를 생각해보기.
  // 만약 원하는 결과가 나오면 그대로 진행하기
  const [data, setData] = React.useState<ItemList[]>(); // queryKey를 useProductData로부터 가져옴

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function getProductData(data: ProductProps) {
    setIsLoading(true);
    const res = await client.post('subpage.php', data);
    // console.log(JSON.stringify(res.data, null, 2));
    setData(res.data.ItemList);
    setIsLoading(false);
  }

  useEffect(() => {
    getProductData(params);
  }, [params]);

  // console.log(JSON.stringify(data, null, 2));

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 10,
          // marginRight: 10,
        }}>
        <Pressable
          onPress={() =>
            setParams({
              MenuType: params.MenuType,
              MenuVar: params.MenuVar,
              sort: 'it_Price',
              sortodr: 'aec',
            })
          }>
          <Text style={styles.sortText}>낮은가격</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            setParams({
              MenuType: params.MenuType,
              MenuVar: params.MenuVar,
              sort: 'it_Price',
              sortodr: 'desc',
            })
          }>
          <Text style={styles.sortText}>높은가격</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            setParams({
              MenuType: params.MenuType,
              MenuVar: params.MenuVar,
              sort: 'it_update_time',
              sortodr: 'aec',
            })
          }>
          <Text style={styles.sortText}>신상품</Text>
        </Pressable>
      </View>
      {/* <HStack flexWrap="wrap">
        {isProductData(data) &&
          data.ItemList.map(item => (
            <ProductCard
              MenuType={params.MenuType}
              MenuVar={params.MenuVar}
              key={item.ItemCode}
              CategorieCode={item.CategorieCode}
              ItemCode={item.ItemCode}
              ItemImgUrl={item.ItemImgUrl}
              ItemName={item.ItemName}
              ItemColor={item.ItemColor}
              ItemChargeNormal={item.ItemChargeNormal}
              ItemChargeSales={item.ItemChargeSales}
              ItemDCRate={item.ItemDCRate}
            />
          ))}
      </HStack> */}
      {isLoading ? (
        <LodingIndicator count={data?.length || 4} />
      ) : (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data?.map(item => (
            <ProductCard
              MenuType={params.MenuType}
              MenuVar={params.MenuVar}
              key={item.ItemCode}
              CategorieCode={item.CategorieCode}
              ItemCode={item.ItemCode}
              ItemImgUrl={item.ItemImgUrl}
              ItemName={item.ItemName}
              ItemColor={item.ItemColor}
              ItemChargeNormal={item.ItemChargeNormal}
              ItemChargeSales={item.ItemChargeSales}
              ItemDCRate={item.ItemDCRate}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default React.memo(withCommontLayout(Products));

const styles = StyleSheet.create({
  sortText: {
    margin: 10,
    color: '#777',
  },
});
