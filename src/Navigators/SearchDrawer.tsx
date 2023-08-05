import {HStack, Box} from 'native-base';
import React from 'react';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';
import DrawerButton from '@src/Atomic/Navigator/DrawerButton';
import {useDrawerState} from '@src/contexts/DrawerStateContext';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerScreenProps} from '@Types/NavigationTypes';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useSearchState} from '@src/hooks/stateHooks/useSearchState';
import SearchOption from '@src/Modules/SearchResult/SearchOption';

export default function SearchDrawer(props: any) {
  const [, setDrawerType] = useDrawerState();
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<DrawerScreenProps>>();
  const stackNavigation =
    useNavigation<StackNavigationProp<StackScreenProps>>();
  const {
    copyText,
    setCopyText,
    selected,
    setSelected,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    showError,
    setShowError,
    handleCheckboxToggle,
    handleDefaultValues, // 이 부분 불러오기
  } = useSearchState();

  const handleSearch = () => {
    if (copyText.length < 2) {
      setShowError(true);
    } else {
      setShowError(false);
      stackNavigation.navigate('SearchResult', {
        SearchRange: selected.join('').toString(),
        SearchPrice:
          (minPrice && maxPrice && `${minPrice} ~ ${maxPrice}`) ||
          '0 ~ 99999999',
        SearchStr: copyText,
      });
      handleDefaultValues();
    }
  };

  return (
    <Box m={5} safeArea>
      <HStack>
        <DrawerButton
          title="내정보"
          onPress={() => {
            setDrawerType(true);
          }}
        />
        <DrawerButton
          title="나가기"
          onPress={() => drawerNavigation.dispatch(DrawerActions.closeDrawer())}
        />
      </HStack>
      <DividerTitle title="SEARCH" fontSize={14} />
      <Box bg="#fafafa" p={2} pt={7} borderWidth={1} borderColor="#CCC">
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
    </Box>
  );
}
