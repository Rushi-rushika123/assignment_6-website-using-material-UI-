import React from "react";
import "./index.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
export default function ServicesCard({ serviceCardData }) {
  return (
    <div className="flex">
      {serviceCardData.map((item) => (
        <div>
          <Card className="serviceCard">
            <CardActionArea className="cardAction">
              <Box id="dataOfChord">
                <CardMedia
                  component="img"
                  className="img"
                  image={item.image}
                  alt={item.heading}
                />
                <Box>
                  <div id="head">{item.heading}</div>
                  <Box id="scheme">
                    <p>
                      $<span id="numbers"> {item.money}</span>/mo
                    </p>
                  </Box>
                </Box>
              </Box>

              <CardContent sx={{ padding: "0px" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "40px" }}
                >
                  <p className="text">
                    <CheckIcon id="CheckIcon" />
                    {item.text1}
                  </p>
                  <p>
                    <CheckIcon id="CheckIcon" />
                    {item.text2}
                  </p>
                  <p>
                    <CheckIcon id="CheckIcon" />
                    {item.text3}
                  </p>
                  <p>
                    <CheckIcon id="CheckIcon" />
                    {item.text4}
                  </p>
                  <p>
                    <CheckIcon id="CheckIcon" />
                    {item.text5}
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    background: "#3f51b5",
                    borderRadius: "25px",
                  }}
                >
                  Buy Now
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
