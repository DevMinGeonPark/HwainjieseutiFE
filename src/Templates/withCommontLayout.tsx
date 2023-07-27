import {ScrollView} from 'react-native';
import React, {useCallback, useState, useRef} from 'react';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Flex, Box} from 'native-base';
import FixBar from '@src/Modules/Detail/FixBar';
import {
  ScrollViewContext,
  ScrollViewInstance,
} from '@src/contexts/ScrollViewContext';

const withCommontLayout = (
  // WrappedComponent: React.ComponentType<unknown>,
  WrappedComponent: React.ComponentType<unknown>,
  options?: {showFixBar?: boolean},
): React.FC => {
  const HOC: React.FC = props => {
    // const showFixBar =
    //   WrappedComponent.displayName === 'Detail' ||
    //   WrappedComponent.name === 'Detail';
    const showFixBar = options?.showFixBar;

    const scrollViewRef = useRef<ScrollViewInstance>(null);

    const [showLogo, setShowLogo] = useState(true);

    const onScrollHandler = useCallback(
      (event: {nativeEvent: {contentOffset: {y: any}}}) => {
        const currentY = event.nativeEvent.contentOffset.y;

        currentY > 80 ? setShowLogo(false) : setShowLogo(true);
      },
      [],
    );

    return (
      <Box flex={1} bg={'white'} safeArea>
        <Header showLogo={showLogo} />
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
      </Box>
    );
  };

  return HOC;
};

export default withCommontLayout;
