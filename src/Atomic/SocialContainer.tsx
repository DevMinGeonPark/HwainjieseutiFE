import {ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import {HStack, Image, Box, Pressable, Center} from 'native-base';
import {FontHeading} from './FontHeading';

interface Props {
  image: ImageSourcePropType;
  title: string;
  desc: string;
  onPress?: () => void;
}

const SocialContainer: FC<Props> = ({image, title, desc, onPress}) => {
  return (
    <Center>
      <Pressable
        borderBottomColor="#555"
        borderBottomWidth={1}
        width={260}
        justifyContent="center"
        onPress={onPress}
        p={3}>
        <HStack>
          {image && (
            <Image
              alt="Social Logo"
              resizeMode="contain"
              width={60}
              height={60}
              source={image}
            />
          )}
          <Box mx={2}>
            <FontHeading color="white" fontSize={25}>
              {title}
            </FontHeading>
            <FontHeading color="white" fontSize={14}>
              {desc}
            </FontHeading>
          </Box>
        </HStack>
      </Pressable>
    </Center>
  );
};

export default SocialContainer;
