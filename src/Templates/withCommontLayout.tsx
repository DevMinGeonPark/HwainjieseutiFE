import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@src/Modules/Header';
import UserInfo from '@src/Modules/UserInfo';
import {useUserState} from '@src/contexts/UserContext';
import Footer from '@src/Modules/Footer';
import {ScrollView} from 'native-base';

const withCommontLayout = (
  WrappedComponent: React.ComponentType<any>,
): React.FC => {
  const HOC: React.FC = props => {
    const [user] = useUserState();

    return (
      <SafeAreaView style={styles.common}>
        <View style={{flex: 2}}>
          <Header />
        </View>
        <View style={{flex: 8}}>
          <ScrollView>
            <WrappedComponent {...props} />
            <Footer />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };

  return HOC;
};

export default withCommontLayout;

const styles = StyleSheet.create({
  common: {
    flex: 1,
    backgroundColor: 'white',
  },
});
