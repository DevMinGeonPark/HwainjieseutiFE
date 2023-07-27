import {createContext} from 'react';
import {ScrollView} from 'react-native';

export type ScrollViewInstance = InstanceType<typeof ScrollView>;

export const ScrollViewContext = createContext<{
  scrollViewRef: React.RefObject<ScrollView> | null;
}>({scrollViewRef: null});
