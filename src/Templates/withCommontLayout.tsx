import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@src/Modules/Header';

const withCommontLayout = (
  WrappedComponent: React.ComponentType<any>,
): React.FC => {
  const HOC: React.FC = props => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
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
    flex: 5,
  },
});
