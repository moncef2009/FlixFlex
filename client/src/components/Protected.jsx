import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import Films from "../pages/Films";

const Protected = ({ children }) => {
  const { authed, check } = useAuth();
  useEffect(() => {
    check();
    console.log(authed);
  });
  if (authed) {
    return children;
  } else {
    return <Films />;
  }
};
export default Protected;
