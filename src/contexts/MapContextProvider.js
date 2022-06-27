import { createContext, useContext, useEffect, useState } from "react";

const MapContext = createContext();

function MapContextProvider({ children }) {
  const initPlaces = [
    { lat: 13.7447988666444, lng: 100.5239174666444 },
    { lat: 13.7433988666444, lng: 100.5262174666444 },
    { lat: 13.7479988666444, lng: 100.5282174666444 },
    { lat: 13.7429988666444, lng: 100.5243174666444 },
    { lat: 13.7446988666444, lng: 100.5227174666444 },
  ];

  const [coordinates, setCoordinates] = useState({
    lat: 13.744698844170392,
    lng: 100.52341741373984,
    // lat: 0,
    // lng: 0
  });

  const [childClicked, setChildClicked] = useState(null);

  const [bounds, setBounds] = useState(null);

  const [places, setPlaces] = useState(initPlaces);

 


    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        }
      );
    }, []);

  return (
    <MapContext.Provider
      value={{
        setCoordinates,
        setChildClicked,
        setBounds,
        coordinates,
        childClicked,

        places
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

const useMap = () => {
  const ctx = useContext(MapContext);
  return ctx;
};

export default MapContextProvider;
export { useMap };
