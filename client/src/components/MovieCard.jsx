import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { favory, getFavory, unfavory } from "../features/user/userSlice";

export default function MovieCard({ image, title, overviw }) {
  const { authed, check } = useAuth();

  React.useEffect(() => {
    check();
  }, [authed]);

  const data = { image, title, overviw };

  React.useEffect(() => {
    dispatch(getFavory());
  }, []);

  const { favorys } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const fav = () => {
    if (favorys.some((e) => e.overviw === overviw)) {
      dispatch(unfavory(data));
    } else {
      dispatch(favory(data));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overviw}
        </Typography>
      </CardContent>
      {authed ? (
        <CardActions>
          <Button size="small" onClick={fav}>
            {favorys.some((e) => e.overviw === overviw) ? "unfavory" : "favory"}
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
