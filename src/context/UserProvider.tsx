import { FC, createContext, useState } from 'react';

export const UserContext = createContext({});

const UserProvider: FC<{}> = ({ children }: { children?: React.ReactNode }) => {

  const [person, setPerson] = useState({});
  const [selectedChat, setSelectedChat] = useState({});

  return (
    <UserContext.Provider value={{ person, setPerson, selectedChat, setSelectedChat }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
