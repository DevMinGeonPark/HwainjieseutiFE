import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import DrawerNavigator from '@Navigators/DrawerNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {UserContextProvider} from './contexts/UserContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
});

export default function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <NativeBaseProvider>
            <DrawerNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
