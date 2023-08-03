import React, {useState, useEffect} from 'react';
import {Image, ActivityIndicator, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width: deviceWidth} = Dimensions.get('window');

interface ImageProps {
  source: {uri: string};
}

const AutoSizedImage: React.FC<ImageProps> = ({source}) => {
  const [imageWidth, setImageWidth] = useState(deviceWidth);
  const [imageHeight, setImageHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // console.log('AutoSizedImage:', source);

  useEffect(() => {
    setIsLoading(true);
    Image.getSize(
      source.uri,
      (originalWidth, originalHeight) => {
        const scaleFactor = deviceWidth / originalWidth;
        const scaledHeight = originalHeight * scaleFactor;
        setImageWidth(deviceWidth);
        setImageHeight(scaledHeight);
        setIsLoading(false);
      },
      error => {
        console.error(`이미지 크기를 가져오는 동안 오류 발생: ${error}`);
      },
    );
  }, [source.uri]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" animating={isLoading} />
      ) : (
        <FastImage
          source={source}
          style={{width: imageWidth, height: imageHeight}}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
    </>
  );
};

export default AutoSizedImage;
