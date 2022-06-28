import { Paper, Typegraphy, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect, createRef } from "react";
import RoomIcon from "@mui/icons-material/Room";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import useStyles from "./styles.js";

function Marker({ lat, lng, color, listSelected }) {
  const classes = useStyles();

  return (
    <div
      className={classes.markerContainer}
      lat={Number(lat)}
      lng={Number(lng)}
    >
      {listSelected ? (
        <FastfoodIcon  fontSize = "large" className = "list-over"></FastfoodIcon>
      ) : (
        <RoomIcon color={color} fontSize="large" className="mark-over" />
      )}
    </div>
  );
}

export default Marker;
