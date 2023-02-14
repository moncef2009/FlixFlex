import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Button LinkComponent={Link} to="/film">
        Film
      </Button>
      <Button LinkComponent={Link} to="/tv">
        TV Show
      </Button>
      <Button LinkComponent={Link} to="/">
        search
      </Button>
    </div>
  );
}

export default NavBar;
