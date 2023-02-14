import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";

export default function Header(onLogin) {
  const { authed } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" LinkComponent={Link} to="/">
            home
          </Button>

          {!authed ? (
            <>
              <Button color="inherit" LinkComponent={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" LinkComponent={Link} to="/login">
                login
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={onClick}>
                logout
              </Button>
              <Button color="inherit" LinkComponent={Link} to="/favorys">
                favorys
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
