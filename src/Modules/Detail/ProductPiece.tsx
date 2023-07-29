import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {ProductProps} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import ProductCard from '@src/Modules/ProductCard';

import client from '@src/API/client';
import {ItemList} from '@src/Types/MainDataTypes';

import LodingIndicator from '@src/Modules/LodingIndicator';

interface ProductPieceProps {
  MenuType: string;
  MenuVar: string;
  ItemCode: string;
}

const ProductPiece = ({MenuType, MenuVar, ItemCode}: ProductPieceProps) => {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  // const toast = useToast();
  // const queryClient = useQueryClient();

  const [params, setParams] = React.useState<ProductProps>({
    MenuType: MenuType,
    MenuVar: MenuVar,
    sort: 'it_update_time',
    sortodr: 'aec',
  });

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
      {isLoading ? (
        <LodingIndicator count={data?.length || 4} />
      ) : (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data
            ?.filter(item => item.ItemCode !== ItemCode)
            .map(item => (
              <ProductCard
                MenuType={item.MenuType}
                MenuVar={item.MenuVar}
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

export default React.memo(ProductPiece);

const styles = StyleSheet.create({
  sortText: {
    margin: 10,
    color: '#777',
  },
});
