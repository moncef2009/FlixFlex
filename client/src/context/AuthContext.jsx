import { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const check = () => {
    if (document.cookie !== "") {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  };

  const value = useMemo(
    () => ({
      authed,
      check,
    }),
    [authed]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
