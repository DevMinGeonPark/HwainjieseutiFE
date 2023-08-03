import React, {useCallback, useState, useRef, useMemo} from 'react';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Box, ScrollView} from 'native-base';
import FixBar from '@src/Modules/Detail/FixBar';
import {
  ScrollViewContext,
  ScrollViewInstance,
} from '@src/contexts/ScrollViewContext';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {FixBarContextProvider} from '@src/contexts/FixBarStateContext';

import {Text} from 'native-base';
import {useLoginCheck} from '@src/hooks/useLoginCheck';

type Options = {showFixBar?: boolean};

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

    const scrollViewRef = useRef<ScrollViewInstance>(null);

    const [showLogo, setShowLogo] = useState(true);

    const onScrollHandler = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentY = event.nativeEvent.contentOffset.y;
        currentY > 80 ? setShowLogo(false) : setShowLogo(true);
      },
      [],
    );

    return (
      <Box flex={1} bg={'white'} safeArea>
        <Header showLogo={showLogo} />
        <FixBarContextProvider>
          <ScrollViewContext.Provider value={{scrollViewRef}}>
            <ScrollView
              ref={scrollViewRef}
              onScroll={onScrollHandler}
              scrollEventThrottle={16}>
              <WrappedComponent {...props} />
              <Box width={30} height={30} />
              <Footer />
            </ScrollView>
          </ScrollViewContext.Provider>
          {showFixBar && <FixBar />}
        </FixBarContextProvider>
      </Box>
    );
  };

  return HOC;
};

export default withCommontLayout;
