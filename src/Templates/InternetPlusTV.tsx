import {useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {CommonSubPageProps} from '@src/Types/ProductTypes';
import {Box} from 'native-base';
import FastImage from 'react-native-fast-image';
import useProductData from '@src/hooks/queryHooks/useProductData';
import {isInternetPlusTvData} from '@src/Types/ProductTypes';
import LodingIndicator from '@src/Modules/LodingIndicator';
import AutoSizedImage from '@src/Modules/AutoSizedImage';

const ImageProduct = () => {
  const width = useWindowDimensions().width;

  const routeParams = useRoute().params as CommonSubPageProps;

  const {data, isLoading} = useProductData({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
  } as CommonSubPageProps);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Box>
      {isInternetPlusTvData(data) && (
        // <AutoSizedImage source={{uri: data.Content}} />
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
