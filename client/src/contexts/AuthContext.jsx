import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INITIAL_AUTH = { idToken: "", userId: "" };

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(INITIAL_AUTH);

  const isAuthenticated = () => !!auth.idToken && !auth.userId;

  const storeCredentials = async (idToken, userId) => {
    await AsyncStorage.setItem("idToken", idToken);
    await AsyncStorage.setItem("userId", userId);

    setAuth({ idToken, userId });
  };

  const logout = () => {
    AsyncStorage.clear();
    setAuth(INITIAL_AUTH);
    //No need to navigate, is handles by Routes.jsx
  };

  useEffect(() => {
    const getCredentials = async () => {
      const idToken = await AsyncStorage.getItem("idToken");
      const userId = await AsyncStorage.getItem("userId");
      if (!idToken || !userId) {
        logout();
        return;
      }
      setAuth({ idToken, userId });
    };
    getCredentials();
  }, []);

  const authInterface = useMemo(() => ({
    ...auth,
    logout,
    isAuthenticated,
    storeCredentials,
  }));

  return (
    <AuthContext.Provider value={authInterface}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth is not a part of the AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
