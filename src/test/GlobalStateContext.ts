import React from 'react';

interface GlobalState {
  notificationPressed: boolean;
  uid: number;
}

export const notificationInfo: GlobalState = {
  notificationPressed: false,
  uid: 0,
};

export const GlobalStateContext =
  React.createContext<GlobalState>(notificationInfo);
