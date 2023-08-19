import {createContext} from 'react';
import {FlatList} from 'react-native';

export type FlatListInstance = InstanceType<typeof FlatList>;

export const FlatListContext = createContext<{
  flatListRef: React.RefObject<FlatList> | null;
}>({flatListRef: null});
