import {Box, HStack} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import SearchOption from '@src/Modules/SearchResult/CheckBoxItem';
import useSearchData from '@src/hooks/queryHooks/useSearchData';
import ProductList from '@src/Modules/Main/ProductList';
import ProductSelector from '@src/Modules/SearchResult/ProductSelector';
import SortSelector from '@src/Modules/SearchResult/SortSelector';
import {ParamProps} from '@Types/SearchDataType';

const SearchResult = () => {
  const {data} = useSearchData({
    SearchRange: 'SDCT',
    SearchPrice: '0 ~ 900000',
    SearchStr: '아이폰',
  });

  const [SearchOptionData, setSearchOptionData] = React.useState<ParamProps>();

  // console.log(JSON.stringify(data, null, 2));

  return (
    <Box>
      <PanelItem
        title={'Search'}
        icon="search"
        titleSize={undefined}
        iconSize={undefined}
      />
      <SearchOption />
      <HStack m={3}>
        <ProductSelector />
        <SortSelector />
      </HStack>
      <Box mt={2}>
        <ProductList items={data?.ItemList || []} />
      </Box>
    </Box>
  );
};

export default withCommontLayout(SearchResult);
