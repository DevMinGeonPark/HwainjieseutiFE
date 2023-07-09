import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@Atomic/LogoHeader';
import SideBarButton from '@src/Atomic/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';

export default function Header() {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.adContainer}>
          <AdCopy />
        </View>
        <View style={styles.logoContainer}>
          <LogoHeader />
        </View>
        <View style={styles.navBarContainer}>
          <View style={styles.sidebarContainer}>
            <SideBarButton />
          </View>
          <View style={{flex: 9, paddingLeft: 7, justifyContent: 'center'}}>
            <NavigationBar />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
  },
  logoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
  },
  navBarContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  sidebarContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: '#eee',
  },
});
