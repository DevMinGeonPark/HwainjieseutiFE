import React, {createContext, useContext, useState} from 'react';

type CRCommentStateType = [
  boolean | undefined,
  (CRStateType: boolean | undefined) => void,
];

const CRCommentContext = createContext<CRCommentStateType | undefined>(
  undefined,
);

export function CRCommentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const CRCommentState = useState<boolean | undefined>(false);
  return (
    <CRCommentContext.Provider value={CRCommentState}>
      {children}
    </CRCommentContext.Provider>
  );
}

export function useCRCommentState() {
  const CRCommentState = useContext(CRCommentContext);
  if (!CRCommentState) {
    throw new Error('Cannot find CRCommentContextProvider');
  }
  return CRCommentState;
}
