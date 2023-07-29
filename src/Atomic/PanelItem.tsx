import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HStack} from 'native-base';
import {FontHeading} from './FontHeading';

interface PanelItemProps {
  title: string;
  titleSize: number | undefined;
  icon: string;
  iconSize: number | undefined;
}

export default function PanelItem({
  title,
  titleSize,
  icon,
  iconSize,
}: PanelItemProps) {
  return (
    <HStack
      p={3}
      space={1}
      bg="#FAFAFA"
      borderBottomWidth={1}
      borderBottomColor="#CCC"
      alignItems="center">
      <Icon name={icon} size={iconSize || 20} color="black" />
      <FontHeading fontSize={titleSize || 20}>{title}</FontHeading>
    </HStack>
  );
}
