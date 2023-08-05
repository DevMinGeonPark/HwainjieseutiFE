import {Box, HStack} from 'native-base';
import React, {useState} from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import SearchOption from '@src/Modules/SearchResult/SearchOption';
import useSearchData from '@src/hooks/queryHooks/useSearchData';
import ProductList from '@src/Modules/Main/ProductList';
import ProductSelector from '@src/Modules/SearchResult/ProductSelector';
import SortSelector from '@src/Modules/SearchResult/SortSelector';
import {ParamProps} from '@Types/SearchDataType';
import {SearchResultProps} from '@src/Types/NavigationTypes';
import {useRoute} from '@react-navigation/native';
import {useSearchState} from '@src/hooks/stateHooks/useSearchState';

const SearchResult = () => {
  const routeParams = useRoute().params as SearchResultProps;
  const [params, setParams] = useState<ParamProps>({
    ...routeParams,
    OrderBy: 'it_sum_qty',
  });
  const {data} = useSearchData(params);
  const {
    copyText,
    setCopyText,
    selected,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    showError,
    setShowError,
    handleCheckboxToggle,
    handleDefaultValues, // 이 부분 불러오기
  } = useSearchState();

  // console.log(JSON.stringify(data, null, 2));

  const sorting = (value: string) => {
    setParams({...params, OrderBy: value});
  };

  const handleSearch = () => {
    if (copyText.length < 2) {
      setShowError(true);
    } else {
      setShowError(false);
      setParams({
        SearchRange: selected.join('').toString(),
        SearchPrice:
          (minPrice && maxPrice && `${minPrice} ~ ${maxPrice}`) ||
          '0 ~ 99999999',
        SearchStr: copyText,
        OrderBy: 'it_sum_qty',
      });
      handleDefaultValues();
    }
  };

  return (
    <Box>
      <PanelItem
        title={'Search'}
        icon="search"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Box p={4} mt={4} bg="#FAFAFA" borderWidth={1} borderColor="#ddd">
        <SearchOption
          selected={selected}
          handleCheckboxToggle={handleCheckboxToggle}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          copyText={copyText}
          setCopyText={setCopyText}
          handleSearch={handleSearch}
          showError={showError}
        />
      </Box>
      <Box m={3}>
        <SortSelector sorting={sorting} />
      </Box>
      <Box mt={2}>
        <ProductList items={data?.ItemList || []} />
      </Box>
    </Box>
  );
};

export default withCommontLayout(SearchResult);
