import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { register, rest } from "../features/user/userSlice";

function Resgister() {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const { isLoading, isSuccess, message, user } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    return () => {
      dispatch(rest());
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let userData = {};
    userData.name = state.name;
    userData.password = state.password;
    dispatch(register(userData));
    check();
  };

  if (isLoading) {
    <CircularProgress />;
  }
  if (isSuccess) {
    return <>{user.user.name}</>;
  }

  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          textAlign: "center",
          marginTop: "3rem",
          color: "gray",
        }}
      >
        <Box>
          <Typography variant="h1" component="h1">
            Register
          </Typography>
        </Box>

        <Box
          sx={{
            width: "40%",
          }}
        >
          <form onSubmit={onSubmit}>
            <TextField
              id="name"
              label="name"
              variant="filled"
              name="name"
              onChange={onChange}
              value={state.name}
              sx={{
                width: "100%",
              }}
            />
            <br />
            <TextField
              type="password"
              id="password"
              label="password"
              variant="filled"
              name="password"
              onChange={onChange}
              value={state.password}
              sx={{
                width: "100%",
              }}
            />

            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{ marginTop: "2rem" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Resgister;
