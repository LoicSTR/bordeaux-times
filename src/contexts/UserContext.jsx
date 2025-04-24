import { createContext, useState, useContext } from "react";
import { readUser, writeUser } from "../services/db";

export const UserContext = createContext({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
  loading: false,
  error: null,
});
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(readUser);
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
      const userData = await response.json();
      setUser(userData);
      writeUser(userData);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Login error");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser("");
  };

  return (
    <UserContext.Provider
      value={{ user, loginUser, logoutUser, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
