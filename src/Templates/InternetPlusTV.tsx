import {useWindowDimensions} from 'react-native';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import {CommonProps} from '@src/Types/CommonTypes';
import {Box} from 'native-base';
import useProductData from '@src/hooks/queryHooks/useProductData';
import {isInternetPlusTvData} from '@src/Types/ProductTypes';
import LodingIndicator from '@src/Modules/LodingIndicator';
import AutoHeightImage from 'react-native-auto-height-image';
import FastImage from 'react-native-fast-image';

const ImageProduct = () => {
  const width = useWindowDimensions().width;

  const routeParams = useRoute().params as CommonProps;

  const {data, isLoading} = useProductData(routeParams);
  console.log(data);

  if (isLoading) return <LodingIndicator count={4} />;

  return (
    <Box w={width}>
      {isInternetPlusTvData(data) && data?.Content && (
        // <AutoHeightImage width={width} source={{uri: data.Content}} />
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
{
  /* <FastImage
    style={{aspectRatio: 0.09, width: width}}
    source={{uri: data.Content}}
    resizeMode={FastImage.resizeMode.stretch}
  /> */
}
