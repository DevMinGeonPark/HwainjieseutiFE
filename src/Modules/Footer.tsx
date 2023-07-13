import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SocialContainer from '@src/Atomic/SocialContainer';
import {Images} from '@assets/imgs/Images';
import InfoContainer from '@src/Atomic/InfoContainer';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.socialContainer}>
        <SocialContainer
          image={Images.Tel}
          title="1577-3795"
          desc="월-토 09:00 - 18:00 상담가능!"
        />
        <SocialContainer
          image={Images.kakao}
          title="카카오톡채널"
          desc="클릭하면 바로 1:1 상담가능!"
        />
        <SocialContainer
          image={Images.naver}
          title="네이버 톡톡"
          desc="클릭하면 바로 1:1 상담가능!"
        />
      </View>
      <InfoContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  socialContainer: {
    backgroundColor: 'black',
    paddingVertical: 30,
  },
});
