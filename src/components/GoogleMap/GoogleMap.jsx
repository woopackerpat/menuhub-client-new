import GoogleMapReact from "google-map-react";
import { useState, useContext } from "react";
import { useMap } from "../../contexts/MapContextProvider.js";

import useStyles from "./styles.js";

function GoogleMap() {
  const { setCoordinates, setChildClicked, setBounds, coordinates, places } =
    useMap();

  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAG4C7Ju1Fet3ojik0lU_TPkDcdaXuugF4" }}
        defaultCenter={{
          lat: 13.744698844170392,
          lng: 100.52341741373984,
        }}
        center={{
          lat: 13.744698844170392,
          lng: 100.52341741373984,
        }}
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
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
