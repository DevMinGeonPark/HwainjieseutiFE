import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import React, {FC} from 'react';

interface Props {
  image: ImageSourcePropType;
  title: string;
  desc: string;
  onPress?: () => void;
}

const SocialContainer: FC<Props> = ({image, title, desc, onPress}) => {
  return (
    <Pressable style={styles.pressBox} onPress={onPress}>
      <Image style={{width: 60, resizeMode: 'contain'}} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    width: 260,
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  textContainer: {
    margin: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 6,
  },
  desc: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SocialContainer;
