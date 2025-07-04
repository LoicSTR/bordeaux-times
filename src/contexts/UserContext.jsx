import { createContext, useState, useContext } from "react";
import { getStoredUser, setStoredUser } from "../services/db";

export const UserContext = createContext({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
  loading: false,
  error: null,
});
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (user) => {
    setLoading(true);
    setError(null);

    const { username, password } = user;

    try {
      const response = await fetch(`https://dummyjson.com/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const userData = await response.json();
      setUser(userData);
      setStoredUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser("");
    setStoredUser("");
  };

  return (
    <UserContext.Provider
      value={{ user, loginUser, logoutUser, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
