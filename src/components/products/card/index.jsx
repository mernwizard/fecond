import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cardImg from "../../../assets/9859.jpg";
import { ConveyorList } from "../../../common/index";
import { useHistory } from "react-router-dom";

export default function ProductsCard() {
  const history = useHistory();
  const handleOpen = (id) => {
    history.push(`/products/${id}`);
  };
  return (
    <>
      {ConveyorList.map((conveyor) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            key={conveyor.id}
            onClick={() => handleOpen(conveyor.id)}
          >
            <CardActionArea>
              <CardMedia component="img" height="140" image={cardImg} alt="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {conveyor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, quibusdam?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
