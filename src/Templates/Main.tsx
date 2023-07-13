import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Headers from '@Modules/Header';
import withCommontLayout from '@Templates/withCommontLayout';
import CarouselView from '@Modules/CarouselView';

//TEST
import {getMainData} from '@src/API/getMainData';
import useMainData from '@src/hooks/useMainData';
import client from '@src/API/client';
import {Image, Dimensions} from 'react-native';
import Footer from '@Modules/Footer';
import Title from '@src/Atomic/Title';
import ProductCard from '@src/Modules/ProductCard';

const Main = () => {
  const {data, isLoading} = useMainData();
  const width = Dimensions.get('window').width;

  console.log(JSON.stringify(data, null, 2));

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <CarouselView props={data?.ImgMainRoll} />
      <View style={{width: width, maxHeight: 357}}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          source={{uri: data?.ImgMainSub[0].imgsrc}}
        />
      </View>
      <Title title="NEW" desc="얼리어답터를 위한 신제품!" />
      <ProductCard />
      <Title title="BEST" desc="주문폭주! 이달의 BEST 상품!" />
    </ScrollView>
  );
};

export default withCommontLayout(Main);

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
