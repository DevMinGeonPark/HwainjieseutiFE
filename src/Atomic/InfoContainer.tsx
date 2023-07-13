import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '@assets/imgs/Images';

export default function InfoContainer() {
  const width = Dimensions.get('window').width;
  return (
    <View style={{backgroundColor: 'white', padding: 20}}>
      <View style={styles.container}>
        <Text>회사명: </Text>
        <Text style={{fontWeight: 'bold'}}>(주)화인지에스티 </Text>
        <Text>대표자: 박근우</Text>
      </View>
      <View style={styles.container}>
        <Text>주소: </Text>
        <Text>서울특별시 강서구 마곡중앙로 59--21,</Text>
        <Text>7층 707-710호(마곡동, 에이스타워2)</Text>
      </View>
      <View style={styles.container}>
        <Text>사업자번호: </Text>
        <Text>119-81-88667</Text>
      </View>
      <View style={styles.container}>
        <Text>통신판매업신고번호: </Text>
        <Text>2020-서울강서-0419호</Text>
      </View>
      <View style={styles.container}>
        <Text>이메일: </Text>
        <Text style={{fontWeight: 'bold'}}>fine@finegst.com</Text>
        <Text>개인정보관리: 한경호</Text>
      </View>
      <View style={{flexDirection: 'row', overflow: 'hidden'}}>
        <Image
          style={{
            width: '25%',
            height: 23,
            resizeMode: 'contain',
            marginTop: 5,
          }}
          source={Images.FTC}
        />
        <Image
          style={{
            width: '35%',
            // height: '100%',
            height: 30,
            resizeMode: 'contain',
          }}
          source={Images.KAIP}
        />
        <Image
          style={{
            width: '40%',
            height: 23,
            resizeMode: 'contain',
            marginTop: 5,
          }}
          source={Images.CICTM}
        />
      </View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>KT공식몰©</Text>
        <Text>All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 3,
  },
});
