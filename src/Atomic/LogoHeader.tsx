import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '@assets/imgs/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function LogoHeader() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          flex: 1,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Main')}>
        <Image style={styles.logo} source={Images.Logo} />
      </Pressable>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Main')}>
        <Icon name="search" size={20} color="#37a09f" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  searchButton: {
    position: 'absolute',
    top: 7,
    right: 0,
    padding: 10,
  },
});
