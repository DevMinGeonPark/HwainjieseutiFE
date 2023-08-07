import React, {useEffect} from 'react';
import {Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import MenuItem from '@src/Atomic/Drawer/MenuItem';
import AlertModal from '@src/Modules/MenuDrawer/AlertModal';
import {useUserState} from '@src/contexts/UserContext';
import {NumberPreprocesser} from '@src/Utils/NumberPreprocesser';

interface MenuItemProps {
  point?: number;
}
export default function MenuItemModule({point}: MenuItemProps) {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [user, setUser] = useUserState();

  useEffect(() => {
    setUser({
      UserId: user?.UserId || '',
      UserNm: user?.UserNm || '',
      Point: point || 0,
    });
  }, [point]);

  return (
    <Box mx={3}>
      <MenuItem
        text="나의포인트"
        point={NumberPreprocesser(point?.toString() || '0')}
        onPress={() => {
          navigation.navigate('MyPoint');
        }}
      />
      <MenuItem
        text="마이페이지"
        onPress={() => {
          // navigation.navigate('MyPage');
        }}
      />
      <MenuItem
        text="정보수정"
        onPress={() => {
          navigation.navigate('Confirm');
        }}
      />
      <MenuItem
        text="탈퇴하기"
        onPress={() => {
          setIsOpen(true);
        }}
      />
      <MenuItem
        text="1:1문의"
        onPress={() => {
          navigation.navigate('QnAMain');
        }}
      />
      {isOpen && <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Box>
  );
}
