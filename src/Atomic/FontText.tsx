// import {, TextProps} from 'react-native';
import {ITextProps, Text} from 'native-base';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {ColorSchemeType} from 'native-base/lib/typescript/components/types';
import React from 'react';

export const FontText = (
  props: React.JSX.IntrinsicAttributes &
    InterfaceTextProps<ITextProps> & {
      variant?: unknown;
      size?: unknown;
      colorScheme?: ColorSchemeType;
    } & React.RefAttributes<unknown>,
) => {
  return (
    <Text fontFamily="SpoqaHanSansNeo" {...props}>
      {props.children}
    </Text>
  );
};
