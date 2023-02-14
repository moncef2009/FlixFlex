import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavory } from "../features/user/userSlice";

function Favorys() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavory());
  }, []);
  const { favorys } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(favorys);
  }, [favorys]);

  return (
    <div>
      {favorys.length == 0 ? (
        <h1>Faragh</h1>
      ) : (
        favorys.map((favory) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={favory.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {favory.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {favory.overviw}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export default Favorys;
