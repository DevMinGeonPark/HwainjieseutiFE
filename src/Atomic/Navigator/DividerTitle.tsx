import React, {useState} from 'react';
import {Box, Divider, Heading} from 'native-base';

interface DividerTitleProps {
  title: string;
  fontSize: number;
}

const DividerTitle: React.FC<DividerTitleProps> = ({title, fontSize}) => {
  const [textWidth, setTextWidth] = useState(0);

  const handleTextLayout = (event: any) => {
    const textPadding = 2;
    setTextWidth(event.nativeEvent.lines[0].width + textPadding);
  };

  return (
    <Box mt={6} mb={2}>
      <Box>
        <Heading fontSize={fontSize} onTextLayout={handleTextLayout}>
          {title}
        </Heading>
        <Divider my="2" alignSelf="flex-start" bg="muted.800" w={textWidth} />
      </Box>
    </Box>
  );
};

export default DividerTitle;
