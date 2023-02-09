import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, rest } from "../features/user/userSlice";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [logedout, setLogedout] = React.useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(rest());
  };

  const onClick = () => {
    dispatch(logout());
    setLogedout(false);
  };

  React.useEffect(() => {
    if (document.cookie !== "") {
      setLogedout(true);
    }
  }, [document.cookie]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            LinkComponent={Link}
            to="/"
            onClick={handleClick}
          >
            home
          </Button>

          {!logedout ? (
            <>
              <Button color="inherit" LinkComponent={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" LinkComponent={Link} to="/login">
                login
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={onClick}>
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
