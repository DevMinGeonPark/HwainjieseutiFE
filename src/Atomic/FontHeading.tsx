import {Heading} from 'native-base';
import {IterfaceHeadingProps} from 'native-base/lib/typescript/components/primitives/Heading/types';
import {
  ThemeComponentSizeType,
  ColorSchemeType,
} from 'native-base/lib/typescript/components/types';
import React from 'react';

export const FontHeading = (
  props: React.JSX.IntrinsicAttributes &
    IterfaceHeadingProps &
    Partial<{}> & {
      variant?: unknown;
      size?: ThemeComponentSizeType<'Heading'>;
      colorScheme?: ColorSchemeType;
    } & React.RefAttributes<unknown>,
) => {
  return (
    <Heading style={{fontFamily: 'SpoqaHanSansNeo'}} {...props}>
      {props.children}
    </Heading>
  );
};
