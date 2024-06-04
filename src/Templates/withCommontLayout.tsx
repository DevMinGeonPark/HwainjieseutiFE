import React, {useRef, useMemo} from 'react';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Box, View} from 'native-base';
import FixBar from '@src/Modules/Detail/FixBar';
import {NativeScrollEvent, NativeSyntheticEvent, FlatList} from 'react-native';
import {FixBarContextProvider} from '@src/contexts/FixBarStateContext';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {FlatListContext, FlatListInstance} from '@src/contexts/FlatListContext';

import GoCustomerCenter from '@src/Atomic/Main/GoCustomerCenter';

type Options = {showFixBar?: boolean; showGoCustomerCenter?: boolean};

interface ListItem {
  type: 'header' | 'wrappedComponent' | 'space' | 'footer';
}

const withCommontLayout = (
  WrappedComponent: React.ComponentType<unknown>,
  options?: Options,
): React.FC => {
  const defaultOptions: Options = {
    showFixBar: false,
    showGoCustomerCenter: false,
  };

  const HOC: React.FC = props => {
    const mergedOptions = useMemo(
      () => ({...defaultOptions, ...options}),
      [options],
    );
    const showFixBar = mergedOptions.showFixBar;
    const showGoCustomerCenter = mergedOptions.showGoCustomerCenter;
    const flatListRef = useRef(null);

    const renderItem = ({item}: {item: ListItem}) => {
      if (item.type === 'header') {
        return <Header />;
      } else if (item.type === 'wrappedComponent') {
        return <WrappedComponent {...props} />;
      } else if (item.type === 'space') {
        return <Box width={30} height={30} />;
      } else if (item.type === 'footer') {
        return <Footer />;
      }

      return null;
    };

    return (
      <Box flex={1} bg={'white'} safeArea>
        <FixBarContextProvider>
          <FlatListContext.Provider value={{flatListRef}}>
            <FlatList
              ref={flatListRef}
              scrollEventThrottle={16}
              data={[
                {type: 'header'},
                {type: 'wrappedComponent'},
                {type: 'space'},
                {type: 'footer'},
              ]}
              renderItem={renderItem}
              keyExtractor={(item, index) => `wr-${item.type}-${index}`}
            />
          </FlatListContext.Provider>
          {showFixBar && <FixBar />}
        </FixBarContextProvider>
        {showGoCustomerCenter && <GoCustomerCenter />}
      </Box>
    );
  };

  return HOC;
};

export default withCommontLayout;
