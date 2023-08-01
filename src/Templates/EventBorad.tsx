import {Box, Image} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {useRoute} from '@react-navigation/native';
import useEventData from '@src/hooks/queryHooks/useEventData';
import InfoPanel from '@src/Modules/EventBoard/InfoPanel';
import {FontHeading} from '@src/Atomic/FontHeading';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';
import CommentBox from '@src/Modules/EventBoard/CommentBox';

const EventBorad = () => {
  const routeParams = useRoute().params as {Uid: string};

  const {data} = useEventData({Uid: routeParams.Uid});
  // console.log(JSON.stringify(data, null, 2));

  return (
    <Box>
      <FontHeading p={2} py={3} fontSize={16}>
        {data?.Subject}
      </FontHeading>
      <InfoPanel
        WriteDate={data?.WriteDate || ''}
        HitCount={data?.HitCount || ''}
      />
      <Box p={3} h={200}>
        <Image
          width="100%"
          height="100%"
          resizeMode="contain"
          source={{uri: data?.ImgSrc}}
          alt="image"
        />
      </Box>
      <DividerTitle title="Comments" fontSize={16} />
      {data?.Comments.map((item, index) => (
        <CommentBox key={index} Comment={item} />
      ))}
    </Box>
  );
};

export default withCommontLayout(EventBorad);
