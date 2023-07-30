import React, {ReactNode} from 'react';
import {Box} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';

// Props 타입을 정의합니다.
interface RateTypeUIProps {
  heading: string;
  children: ReactNode;
}

const RateTypeUI: React.FC<RateTypeUIProps> = ({heading, children}) => {
  return (
    <Box m={3}>
      <FontHeading>{heading}</FontHeading>
      {children}
    </Box>
  );
};

export default RateTypeUI;
