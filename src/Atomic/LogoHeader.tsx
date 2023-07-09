import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '@assets/imgs/Images';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <Pressable style={{flex: 1}}>
        <Image style={styles.logo} source={Images.Logo} />
      </Pressable>

      <Pressable
        style={styles.searchButton}
        onPress={() => console.log('press!')}>
        <Icon name="search" size={20} color="#37a09f" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    // borderBlockColor: '#CCC',
    flex: 1,
    margin: 'auto',
    padding: 10,
    // margin: 10,
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  searchButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },

  // {
  //   // alignSelf: 'stretch',
  //   alignContent: 'center',
  //   padding: 10,
  //   margin: 30,
  //   justifyContent: 'center',
  // },
});
