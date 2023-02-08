import { createContext, useContext, useState } from 'react';
import { UserType, UserContextType, UserProviderType } from '../types/user';
import axios from 'axios';

const UserContext = createContext({} as UserContextType);

export function useUser() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getUser = async (username: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = await response.data;
      setUser(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ 
      user,
      getUser,
      loading,
      error,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}