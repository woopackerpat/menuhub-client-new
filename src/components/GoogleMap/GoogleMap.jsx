import { Box, Paper } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useState, useEffect, createRef } from "react";
import { useMap } from "../../contexts/MapContextProvider.js";
import Marker from "./Marker.jsx";
import RoomIcon from "@mui/icons-material/Room";

import useStyles from "./styles.js";

function GoogleMap() {
  const {
    setCoordinates,
    setChildClicked,
    setBounds,
    coordinates,
    places,
    markId,
    listClicked,
  } = useMap();

  const classes = useStyles();

  return (
    <Box className={classes.mapContainer} elevation={3}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAG4C7Ju1Fet3ojik0lU_TPkDcdaXuugF4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: e.marginBounds.ne,
            nw: e.marginBounds.nw,
            se: e.marginBounds.se,
            sw: e.marginBounds.sw,
          });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        <Marker
          lat={Number(coordinates.lat)}
          lng={Number(coordinates.lng)}
          color="blue"
        />
        {places.map((place, idx) => (
          <Marker
            key={idx}
            lat={Number(place.lat)}
            lng={Number(place.lng)}
            color="error"
           
            listSelected = {markId[idx] === listClicked}
          />
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default GoogleMap;
