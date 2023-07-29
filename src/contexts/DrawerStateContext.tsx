import React, {createContext, useContext, useState} from 'react';

type DrawerState = [boolean | null, (drawerType: boolean | null) => void];

const DrawerContext = createContext<DrawerState | null>(null);

export function DrawerContextProvider({children}: {children: React.ReactNode}) {
  const drawerState = useState<boolean | null>(true);
  return (
    <DrawerContext.Provider value={drawerState}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerState() {
  const drawerState = useContext(DrawerContext);
  if (!drawerState) {
    throw new Error('Cannot find DrawerStateContextProvider');
  }
  return drawerState;
}
