import { createContext, useContext, useState } from "react";
import { notifications } from "./data";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const Context = ({ children }) => {
  const [data, setData] = useState(notifications);
  return (
    <NotificationContext.Provider value={{ data, setData }}>
      {children}
    </NotificationContext.Provider>
  );
};
export default Context;
