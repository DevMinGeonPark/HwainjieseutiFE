import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

type Title = {
  title: string;
  desc: string;
};

export default function Title(params: Title) {
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        marginBottom: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text style={styles.H2}>{params.title}</Text>
        <View
          style={{
            backgroundColor: '#ffcd00',
            position: 'absolute',
            bottom: 0,
            width: width - width / 3,
            height: 20,
            zIndex: 1,
          }}></View>
      </View>
      <Text
        style={{
          fontSize: 18,
          alignSelf: 'center',
          marginVertical: 10,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {params.desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  H2: {
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 2,
    color: 'black',
  },
});
