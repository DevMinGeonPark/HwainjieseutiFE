import {Box, Center, Image} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import useEventData from '@src/hooks/queryHooks/useEventData';
import InfoPanel from '@src/Modules/EventBoard/InfoPanel';
import {FontHeading} from '@src/Atomic/FontHeading';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';

import AutoHeightImage from 'react-native-auto-height-image';
import {useWindowDimensions} from 'react-native';
import Pagination from '@src/Modules/EventBoard/Pagination';
import {CRCommentContextProvider} from '@src/contexts/CRCommentModalContext';
import CommentGroup from '@src/Modules/EventBoard/CommentGroup';
import useLog from '@src/hooks/useLog';
import CreateCommentForm from '@src/Modules/EventBoard/CreateCommentForm';

const EventBorad = () => {
  const routeParams = useRoute().params as {Uid: string};
  const [currentPage, setCurrentPage] = React.useState(1);
  const {data, refetch} = useEventData({
    Uid: routeParams.Uid,
    CommentsPage: currentPage,
  });

  console.log(JSON.stringify(data, null, 2));

  const log = useLog('root');

  const width = useWindowDimensions().width;

  React.useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const CommentRefetch = () => {
    refetch();
    log.info('refetching');
  };

  return (
    <Box mt={3}>
      <FontHeading p={2} py={3} fontSize={16}>
        {data?.Subject}
      </FontHeading>
      <InfoPanel
        WriteDate={data?.WriteDate || ''}
        HitCount={data?.HitCount || ''}
        CommentsCount={data?.CommentsCount || 0}
      />
      <Box mt={5}>
        {data?.ImgSrc && (
          <AutoHeightImage width={width} source={{uri: data?.ImgSrc || ''}} />
        )}
      </Box>
      <DividerTitle title="Comments" fontSize={16} />
      <CRCommentContextProvider>
        {data?.Comments && (
          <CommentGroup
            data={data?.Comments}
            EventIDX={routeParams?.Uid}
            CommentRefetch={CommentRefetch}
          />
        )}
      </CRCommentContextProvider>
      <Center my={5}>
        <Pagination
          CommentsCount={data?.CommentsCount || 0}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Center>
      <CreateCommentForm
        EventIDX={routeParams?.Uid}
        CommentRefetch={CommentRefetch}
      />
    </Box>
  );
};

export default React.memo(withCommontLayout(EventBorad));
