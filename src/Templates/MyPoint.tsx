import React, {useEffect} from 'react';
import {Box, Button, HStack, Spacer} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import usePointDetailData from '@src/hooks/queryHooks/usePointDetailData';
import TableBorad from '@src/Modules/MyPoint/TableBorad';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useToast} from 'native-base';
import {useUserStore} from '@src/Store/userStore';

const MyPoint = () => {
  const {user} = useUserStore();
  const {data, refetch, isLoading} = usePointDetailData({
    KTShopID: user?.UserId || '',
  });

  const Toast = useToast();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, []),
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Box>
      <PanelItem
        title={`마이페이지`}
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      <HStack my={2} mx={1}>
        <Spacer />
        <Spacer />
        <Button
          leftIcon={<Icon name="redo-alt" size={15} color="black" />}
          _text={{color: 'black'}}
          variant="ghost"
          onPress={() => {
            refetch();
            Toast.show({title: '새로고침 되었습니다.'});
          }}>
          포인트 새고로침
        </Button>
      </HStack>
      {!isLoading && <TableBorad tableData={data} />}
    </Box>
  );
};

export default withCommontLayout(MyPoint);
