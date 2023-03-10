import React from "react";
import "./index.scss";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobile from "../../images/appFeatures/mobile.svg";
import CardComp from "../../commonComponent/Card";

export default function AppFeatures({ ConstFile }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "white" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div id="appFeatureComp">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item className="chord">
              <Box id="AppFeatureData">
                <Box id="heading">App Features</Box>
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                </Box>
              </Box>
              <Box>
                <Box id="cardData">
                  <CardComp constfile={ConstFile} />
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
          
            <Item className="mobileImage">
            <div id="appFeatureDec">
              
                <img src={mobile} id="mobile" />
                
            </div>
              
            </Item>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
