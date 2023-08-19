import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type NotificationContextType = {
  receivedNotification: boolean;
  setReceivedNotification: (value: boolean) => void;
};

type NotificationProviderProps = {
  children: ReactNode;
};

type Handler = (received: boolean) => void;
let notificationHandler: Handler | null = null;

export const registerNotificationHandler = (handler: Handler): void => {
  notificationHandler = handler;
};

const NotificationContext = createContext<NotificationContextType>({
  receivedNotification: false,
  setReceivedNotification: () => {},
});

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [receivedNotification, setReceivedNotification] = useState(false);

  useEffect(() => {
    if (notificationHandler) {
      notificationHandler(receivedNotification);
    }
  }, [receivedNotification]);

  return (
    <NotificationContext.Provider
      value={{receivedNotification, setReceivedNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};
