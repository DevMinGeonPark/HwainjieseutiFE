import React, {createContext, useContext, useState} from 'react';
import {User} from '@Types/ContentTypes';

type UserContextState = [User | null, (user: User | null) => void];

const UserContext = createContext<UserContextState | null>(null);

export function UserContextProvider({children}: {children: React.ReactNode}) {
  const userState = useState<User | null>(null);
  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export function useUserState() {
  const userState = useContext(UserContext);
  if (!userState) {
    throw new Error('Cannot find UserContextProvider');
  }
  return userState;
}

// export function getUserName() {
//   console.log(useState().toString());
//   // return useUserState().toString().substring(0, 3);
// }
