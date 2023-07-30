import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {
  EventData,
  ProductData,
  ProductProps,
  SubPageBaseProps,
} from '@src/Types/ProductTypes';
import ProductCard from '@src/Modules/ProductCard';
import client from '@src/API/client';
import {ItemList} from '@src/Types/MainDataTypes';
import LodingIndicator from '@src/Modules/LodingIndicator';

import useProductData from '@src/hooks/queryHooks/useProductData';
import {HStack, Box} from 'native-base';
import SortItem from '@src/Atomic/Products/SortItem';
import SortBar from '@src/Modules/Products/SortBar';

function isProductData(
  data: EventData | ProductData | undefined,
): data is ProductData {
  return data !== undefined && 'ItemList' in data;
}

const Products = () => {
  const route = useRoute();
  const routeParams = route.params as SubPageBaseProps;

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

  if (isLoading) return <LodingIndicator count={data?.length || 4} />;

  return (
    <Box>
      <SortBar
        setParams={setParams}
        MenuType={routeParams.MenuType}
        MenuVar={routeParams.MenuVar}
      />
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
      <HStack flexWrap="wrap">
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
      </HStack>
    </Box>
  );
};

export default React.memo(withCommontLayout(Products));
