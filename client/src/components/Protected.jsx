import { useSelector } from "react-redux";
import Films from "../pages/Films";

const Protected = ({ children }) => {
  const { authed } = useSelector((state) => state.user);

  if (authed) {
    return children;
  } else {
    return <Films />;
  }
};
export default Protected;
