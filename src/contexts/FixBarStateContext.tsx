import React, {createContext, useContext, useState} from 'react';
import {FixBarContextStateProps} from '@Types/ContentTypes';

type FixBarContextState = [
  FixBarContextStateProps | null,
  (fixbarProps: FixBarContextStateProps | null) => void,
];

const FixBarContext = createContext<FixBarContextState | null>(null);

export function FixBarContextProvider({children}: {children: React.ReactNode}) {
  const fixBarState = useState<FixBarContextStateProps | null>(null);
  return (
    <FixBarContext.Provider value={fixBarState}>
      {children}
    </FixBarContext.Provider>
  );
}

export function useFixBarState() {
  const fixBarState = useContext(FixBarContext);
  if (!fixBarState) {
    throw new Error('Cannot find FixBarContextProvider');
  }
  return fixBarState;
}
