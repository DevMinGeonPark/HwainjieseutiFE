import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import useProductData from '@src/hooks/useProductData';
import {ProductProps} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useToast} from 'native-base';
import ProductCard from '@src/Modules/ProductCard';

const Product = () => {
  const route = useRoute();
  const params = route.params as ProductProps;
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const toast = useToast();

  const {data, isSuccess} = useProductData(params);

  console.log(JSON.stringify(data, null, 2));

  // const AlertLogin = () => {
  //   navigation.goBack();
  //   toast.show({title: '로그인이 필요합니다.'});
  // };

  // if (isSuccess) {
  //   data.LogIn === 'Y' ? console.log('로그인') : AlertLogin();
  // }

  // console.log(JSON.stringify(data, null, 2));
  // TODO:: Params을 이용해서 요청하는 기능을 만들기

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

export default withCommontLayout(Product);

const styles = StyleSheet.create({
  sortText: {
    margin: 10,
    color: '#777',
  },
});
