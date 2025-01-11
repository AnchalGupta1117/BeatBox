import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: undefined,
    email: undefined,
    _id: undefined,
  });
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
      const response = await axios.get(`${backendURL}/profile`, {
        withCredentials: true,
      });
      if (response.data.user) {
        setUser(() => {
          const { name, email, _id } = response.data.user;
          return {
            name,
            email,
            _id,
          };
        });
      }
    } catch (e) {
      console.error('Error fetching user data:', e);
      setUser({
        name: undefined,
        email: undefined,
        _id: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};