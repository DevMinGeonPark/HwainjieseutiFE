import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, ChevronRightIcon} from 'native-base';
// import {FontAwesome} from 'react-native-vector-icons/FontAwesome';

interface props {
  text: string;
  point: string | undefined;
}
export default function MenuItem(params: props) {
  return (
    <View style={{marginVertical: 5}}>
      <View
        style={{
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
          flexDirection: 'row',
          paddingBottom: 6,
        }}>
        <Text style={{flex: 1, textAlign: 'left'}}>{params.text}</Text>
        {params.point === undefined ? (
          <ChevronRightIcon size={3} />
        ) : (
          <Text style={{flex: 1, textAlign: 'right'}}>{params.point}점</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
