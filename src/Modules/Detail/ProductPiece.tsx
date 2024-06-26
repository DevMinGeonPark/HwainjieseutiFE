import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {ParamProps} from '@src/Types/ProductTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import ProductCard from '@src/Modules/ProductCard';
import useProductData from '@src/hooks/queryHooks/useProductData';
import LodingIndicator from '@src/Modules/LodingIndicator';
import {HStack, Box} from 'native-base';
import SortBar from '@src/Modules/Products/SortBar';
import {isProductData} from '@src/Types/ProductTypes';

interface ProductPieceProps {
  MenuType: string;
  MenuVar: string;
}

const ProductPiece = ({MenuType, MenuVar}: ProductPieceProps) => {
  const [params, setParams] = React.useState<ParamProps>({
    MenuType: MenuType,
    MenuVar: MenuVar,
    sort: 'it_update_time',
    sortodr: 'aec',
  });

  const {data, isLoading} = useProductData(params);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Box>
      <SortBar setParams={setParams} MenuType={MenuType} MenuVar={MenuVar} />
      <HStack flexWrap="wrap">
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
      </HStack>
    </Box>
  );
};

export default ProductPiece;
