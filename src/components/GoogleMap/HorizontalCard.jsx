import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";

function HorizontalCard({ place, selected, refProp }) {
  console.log(refProp)
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    
      <Grid container>
        <Grid item xs={12} lg={5}>
          <Box sx={{ borderRadius: "24px", overflow: "hidden" }}>
            <img
              src="https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?t=st=1656231277~exp=1656231877~hmac=2ff8da4bb6f809aef1d5e5e2f62e9927e65e7d07c08c82b2e1011082e1565b2f&w=1380"
              alt=""
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box sx={{ px: "20px", py: "15px" }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Restaurant Name ABC
            </Typography>
            <Grid container>
              <Grid item xs={2}>
                <RoomIcon color="error" fontSize="large" className = {selected && "mark-clicked"}/>
              </Grid>
              <Grid
                item
                xs={10}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  variant="caption"
                  sx={{ lineHeight: 1.5, color: "#626262" }}
                >
                  Mint tower 719 Banthadthong road Wangmai Pathumwan Bangkok
                  10330
                </Typography>
              </Grid>
            </Grid>
            <Box style={{ backgroundColor: "white" }}>tag</Box>
          </Box>
        </Grid>
      </Grid>
   
  );
}

export default HorizontalCard;
