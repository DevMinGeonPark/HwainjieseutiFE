import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {
  ProductProps,
  SubPageBaseProps,
  isProductData,
} from '@src/Types/ProductTypes';
import ProductCard from '@src/Modules/ProductCard';
import LodingIndicator from '@src/Modules/LodingIndicator';

import useProductData from '@src/hooks/queryHooks/useProductData';
import {HStack, Box} from 'native-base';
import SortBar from '@src/Modules/Products/SortBar';
import ProductList from '@src/Modules/Main/ProductList';

const Products = () => {
  const routeParams = useRoute().params as SubPageBaseProps;

  const [params, setParams] = React.useState<ProductProps>({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
    sort: 'it_update_tme',
    sortodr: 'desc',
  });
  const {data, isLoading} = useProductData(params);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Box>
      <SortBar
        setParams={setParams}
        MenuType={routeParams.MenuType}
        MenuVar={routeParams.MenuVar}
      />
      {isProductData(data) && <ProductList items={data?.ItemList || []} />}
    </Box>
  );
};

export default withCommontLayout(Products);
