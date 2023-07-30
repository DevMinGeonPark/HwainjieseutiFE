import {HStack} from 'native-base';
import ProductCard from '@src/Modules/ProductCard';
import React from 'react';
import {ItemList} from '@src/Types/MainDataTypes';

interface ProductListProps {
  items: ItemList[];
}

export default function ProductList({items}: ProductListProps) {
  return (
    <HStack flexWrap="wrap">
      {items?.map((item, index) => (
        <ProductCard
          key={index}
          //   에러에 의해 임시 처리
          MenuType={'ca_id'}
          // MenuType={params.MenuType}
          MenuVar={item.MenuVar || 'defulat'}
          CategorieCode={item.CategorieCode || 'defulat'}
          ItemCode={item.ItemCode || 'defulat'}
          ItemImgUrl={item.ItemImgUrl || 'defulat'}
          ItemName={item.ItemName || 'defulat'}
          ItemColor={item.ItemColor || 'defulat'}
          ItemChargeNormal={item.ItemChargeNormal || 0}
          ItemChargeSales={item.ItemChargeSales || 0}
          ItemDCRate={item.ItemDCRate || 0}
        />
      ))}
    </HStack>
  );
}
