import { createContext, useContext, useEffect, useState } from "react";

const MapContext = createContext();

function MapContextProvider({ children }) {
//   const initPlaces = [
//     { lat: 13.7447988666, lng: 100.5239174666 },
//     { lat: 13.7433988666, lng: 100.5262174666 },
//     { lat: 13.7479988666, lng: 100.5282174666 },
//     { lat: 13.7429988666, lng: 100.5243174666 },
//     { lat: 13.7446988666, lng: 100.5227174666 },
//   ];

  const [coordinates, setCoordinates] = useState({
    lat: 13.744698844170392,
    lng: 100.52341741373984,
  });

  const [childClicked, setChildClicked] = useState({});
  const [bounds, setBounds] = useState(null);

  const [places, setPlaces] = useState([]);

  console.log({coordinates, places})

//   const [elRefs, setElRefs] = useState([]);

  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(
  //       ({ coords: { latitude, longitude } }) => {
  //         setCoordinates({ lat: latitude, lng: longitude });
  //       }
  //     );
  //   }, []);

  return (
    <MapContext.Provider
      value={{
        setCoordinates,
        setChildClicked,
        setBounds,
        coordinates,

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
