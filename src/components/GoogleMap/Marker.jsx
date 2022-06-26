import { Paper, Typegraphy, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect, createRef } from "react";
import RoomIcon from '@mui/icons-material/Room';

import useStyles from "./styles.js";

function Marker({ lat, lng, color }) {
  const classes = useStyles();

 

  
  return (
    <div
      className={classes.markerContainer}
      lat={Number(lat)}
      lng={Number(lng)}
    >
      <RoomIcon color= {color} fontSize="large" />
    </div>
  );
}

export default Marker;
