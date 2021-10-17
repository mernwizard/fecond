import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard(props) {
  const handleOpen = (id) => {
    props.openModal();
    props.setId(id);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => handleOpen(props.id)}>
          <CardMedia
            component="img"
            height="140"
            image="assets/9859.jpg"
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.subTitle}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
