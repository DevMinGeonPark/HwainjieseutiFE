import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import RenderHtml from 'react-native-render-html';
import {useRoute} from '@react-navigation/native';
import {ProductProps, RouteParamsProps} from '@src/Types/ProductTypes';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import client from '@src/API/client';
import {htmlPreprocesser} from '@src/Utils/htmlPreprocesser';

const ImageProduct = () => {
  const width = Dimensions.get('window').width;

  const [source, setSource] = React.useState({html: ''});
  const routeParams = useRoute().params as RouteParamsProps;

  const [params, setParams] = React.useState<ProductProps>({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
    sort: 'it_update_time',
    sortodr: 'aec',
  });

  async function getImageProductData(data: ProductProps) {
    const res = await client.post('subpage.php', data);
    console.log(JSON.stringify(res.data, null, 2));
    setSource({html: htmlPreprocesser(res.data.Content)});
  }

  React.useEffect(() => {
    getImageProductData(params);
  });

  return (
    <View>
      {/* <Text>d</Text> */}
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default withCommontLayout(ImageProduct);

const styles = StyleSheet.create({});
