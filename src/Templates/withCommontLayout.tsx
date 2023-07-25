import React from 'react';
import Header from '@src/Modules/Header';
import Footer from '@src/Modules/Footer';
import {Flex, ScrollView, Box} from 'native-base';

const withCommontLayout = (
  WrappedComponent: React.ComponentType<unknown>,
): React.FC => {
  const HOC: React.FC = props => {
    return (
      <Box flex={1} bg={'white'} safeArea>
        <Flex flex={2}>
          <Header />
        </Flex>
        <Flex flex={8}>
          <ScrollView>
            <WrappedComponent {...props} />
            <Box width={100} height={100} />
            <Footer />
          </ScrollView>
        </Flex>
      </Box>
    );
  };

  return HOC;
};

export default withCommontLayout;
