import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import withCommontLayout from '../withCommontLayout';
import {useRoute} from '@react-navigation/native';
import useProductData from '@src/hooks/useProductData';
import {ProductProps} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useToast} from 'native-base';
import ProductCard from '@src/Modules/ProductCard';

import {useFocusEffect} from '@react-navigation/native';
import {useQueryClient} from 'react-query';

const Samsung = () => {
  const route = useRoute();
  const params = route.params as ProductProps;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const toast = useToast();

  console.log(route.name);

  const {data} = useProductData(params); // queryKey를 useProductData로부터 가져옴

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 10,
          // marginRight: 10,
        }}>
        <Text style={styles.sortText}>낮은가격</Text>
        <Text style={styles.sortText}>높은가격</Text>
        <Text style={styles.sortText}>신상품</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data?.ItemList.map(item => (
          <ProductCard
            key={item.itemCode.toString()}
            itemCode={item.itemCode}
            itemImgUrl={item.itemImgUrl}
            itemName={item.itemName}
            ItemColor={item.ItemColor}
            ItemChargeNormal={item.ItemChargeNormal}
            ItemChargeSales={item.ItemChargeSales}
            ItemDCRate={item.ItemDCRate}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default React.memo(withCommontLayout(Samsung));

const styles = StyleSheet.create({
  sortText: {
    margin: 10,
    color: '#777',
  },
});
