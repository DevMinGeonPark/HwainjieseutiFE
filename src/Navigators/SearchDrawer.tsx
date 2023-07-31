import {
  HStack,
  Box,
  Input,
  Button,
  VStack,
  SearchIcon,
  IconButton,
} from 'native-base';
import React from 'react';
import {useToast} from 'native-base';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';
import DrawerButton from '@src/Atomic/Navigator/DrawerButton';
import {useDrawerState} from '@src/contexts/DrawerStateContext';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerScreenProps} from '@Types/NavigationTypes';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import SearchTypeSelector from '@src/Atomic/Navigator/SearchTypeSelector';
import SearchLogicSelector from '@src/Atomic/Navigator/SearchLogicSelector';

export default function SearchDrawer(props: any) {
  const Toast = useToast();
  const [, setDrawerType] = useDrawerState();
  const navigation = useNavigation<DrawerNavigationProp<DrawerScreenProps>>();
  const [copyText, setCopyText] = React.useState<string>('');

  return (
    <Box m={5} safeArea>
      <HStack>
        <DrawerButton
          title="내정보"
          onPress={() => {
            setDrawerType(true);
          }}
        />
        <DrawerButton
          title="나가기"
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </HStack>
      <DividerTitle title="SEARCH" fontSize={14} />
      <Box bg="#fafafa" p={2}>
        <VStack space={3}>
          <HStack space={2}>
            <SearchTypeSelector />
            <SearchLogicSelector />
          </HStack>
          <Input
            h={10}
            bg="white"
            style={{fontSize: 12}}
            rounded="none"
            placeholder="검색어는 두글자 이상"
            onChangeText={v => setCopyText(v)}
            value={copyText}
            InputRightElement={
              <Button
                variant={'ghost'}
                rounded="none"
                borderLeftColor="muted.300"
                borderLeftWidth={1}
                bg="#323C46"
                onPress={() => {}}>
                <SearchIcon size="5" color="white" />
              </Button>
            }
          />
        </VStack>
      </Box>
    </Box>
  );
}
