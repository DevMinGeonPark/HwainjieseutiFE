import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@src/Modules/Header';
import UserInfo from '@src/Modules/UserInfo';

const withCommontLayout = (
  WrappedComponent: React.ComponentType<any>,
): React.FC => {
  const HOC: React.FC = props => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <UserInfo />
        <View style={styles.container}>
          <WrappedComponent {...props} />
        </View>
      </SafeAreaView>
    );
  };

  return HOC;
};

export default withCommontLayout;

const styles = StyleSheet.create({
  container: {
    flex: 4.5,
  },
});
