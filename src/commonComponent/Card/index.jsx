import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./index.scss";
export default function CardComp({ constfile }) {
  return (
    <div className="flx">
      {constfile.map((item) => (
        <>
          <Card
            sx={{
              maxWidth: 220,
              maxHeight: 250,
              paddingBottom: "40px",
              boxShadow: "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                className="image"
                image={item.img}
                alt={item.title}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </>
      ))}
    </div>
  );
}
