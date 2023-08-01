import {useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {SubPageBaseProps} from '@src/Types/ProductTypes';
import {Box} from 'native-base';
import FastImage from 'react-native-fast-image';
import useProductData from '@src/hooks/queryHooks/useProductData';
import {isInternetPlusTvData} from '@src/Types/ProductTypes';
import LodingIndicator from '@src/Modules/LodingIndicator';

const ImageProduct = () => {
  const width = useWindowDimensions().width;

  const routeParams = useRoute().params as SubPageBaseProps;

  const {data, isLoading} = useProductData({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
  } as SubPageBaseProps);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Box>
      {isInternetPlusTvData(data) && (
        <FastImage
          style={{aspectRatio: 0.09, width: width}}
          source={{uri: data.Content}}
          resizeMode={FastImage.resizeMode.stretch}
        />
      )}
    </Box>
  );
};

export default React.memo(withCommontLayout(ImageProduct));
