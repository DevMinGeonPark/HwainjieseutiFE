import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {ParamProps, isProductData} from '@src/Types/ProductTypes';
import {CommonProps} from '@src/Types/CommonTypes';
import ProductCard from '@src/Modules/ProductCard';
import LodingIndicator from '@src/Modules/LodingIndicator';

import useProductData from '@src/hooks/queryHooks/useProductData';
import {Box} from 'native-base';
import SortBar from '@src/Modules/Products/SortBar';
import ProductList from '@src/Modules/Main/ProductList';
import Layout from '@src/Modules/Layout';

const Products = () => {
  const routeParams = useRoute().params as CommonProps;

  const [params, setParams] = React.useState<ParamProps>({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
    sort: '',
    sortodr: '',
  });
  const {data, isLoading} = useProductData(params);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Layout>
      <Box>
        <SortBar
          setParams={setParams}
          MenuType={routeParams.MenuType}
          MenuVar={routeParams.MenuVar}
        />
        {isProductData(data) && <ProductList items={data?.ItemList || []} />}
      </Box>
    </Layout>
  );
};

export default React.memo(withCommontLayout(Products));
