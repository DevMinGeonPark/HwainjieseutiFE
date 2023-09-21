import React, {useCallback, useState, useRef, useMemo} from 'react';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Box, View} from 'native-base';
import FixBar from '@src/Modules/Detail/FixBar';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {FixBarContextProvider} from '@src/contexts/FixBarStateContext';

import {Text} from 'native-base';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {FlatListContext, FlatListInstance} from '@src/contexts/FlatListContext';

type Options = {showFixBar?: boolean};

interface ListItem {
  type: 'wrappedComponent' | 'space' | 'footer';
}

const withCommontLayout = (
  WrappedComponent: React.ComponentType<unknown>,
  options?: Options,
): React.FC => {
  const defaultOptions: Options = {showFixBar: false};

  const HOC: React.FC = props => {
    const mergedOptions = useMemo(
      () => ({...defaultOptions, ...options}),
      [options],
    );
    const showFixBar = mergedOptions.showFixBar;
    const flatListRef = useRef(null);
    const width = useWindowDimensions().width;

    const [showLogo, setShowLogo] = useState(true);

    const onScrollHandler = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentY = event.nativeEvent.contentOffset.y;
        currentY > width ? setShowLogo(false) : setShowLogo(true);
      },
      [],
    );

    const renderItem = ({item}: {item: ListItem}) => {
      if (item.type === 'wrappedComponent') {
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
        <Header showLogo={showLogo} />
        <FixBarContextProvider>
          <FlatListContext.Provider value={{flatListRef}}>
            <FlatList
              ref={flatListRef}
              onScroll={onScrollHandler}
              scrollEventThrottle={16}
              data={[
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
      </Box>
    );
  };

  return HOC;
};

export default withCommontLayout;
