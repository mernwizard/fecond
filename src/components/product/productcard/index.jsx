import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router";
import cardImg from "../../../assets/conveyorcards/1 belt conveyor.jpg";

export default function ProductCard(props) {
  const history = useHistory();
  const handleOpen = (id) => {
    history.push(`products/${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => handleOpen(props.id)}>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt={props.title}
            style={{ background: "red", height: "35vh" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#018695" }}
            >
              {props.subTitle}
            </Typography>
            {/* <Typography variant="h6" color="text.secondary">
              {props.title}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
