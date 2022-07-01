import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getRestaurantApi } from "../api/map";

const MapContext = createContext();

function MapContextProvider({ children }) {
  const initPlaces = [];

  const [coordinates, setCoordinates] = useState({
    lat: 13.744698844170392,
    lng: 100.52341741373984,
  });

  const navigate = useNavigate();

  const [childClicked, setChildClicked] = useState(null);

  const [places, setPlaces] = useState(initPlaces);


  const [bounds, setBounds] = useState({});

  const { ne, sw } = bounds;

  // get Restaurant API
  useEffect(() => {
    const run = async () => {
      const res = await getRestaurantApi(ne, sw, coordinates);
      const restaurants = res.data;
      setPlaces(restaurants)
    };
    try {
      run();
    } catch (err) {
      console.log(err);
    }
  }, [bounds]);

  const [listClicked, setListClicked] = useState(null);

  const [markId, setMarkId] = useState([]);

  // search modal

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const handleSubmitSearch = (value) => {
    
    const { lat, lng } = value;
    // ยิง axios ที่นี่ พอได้ค่าแล้วทำการ setPlaces
    setCoordinates({ lat, lng });
    setOpenSearch(false);
    navigate("/map");
  };

  const submitMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        
        setCoordinates({ lat: latitude, lng: longitude });
        setOpenSearch(false);
        navigate("/map");
      }
    );
  };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({ lat: latitude, lng: longitude });
  //     }
  //   );
  // }, []);

  useEffect(() => {
    setMarkId((markId) =>
      Array(places.length)
        .fill()
        .map((_, i) => markId[i] || uuidv4())
    );
  }, [places]);

  return (
    <MapContext.Provider
      value={{
        setCoordinates,
        setChildClicked,
        setBounds,
        coordinates,
        childClicked,

        places,
        setListClicked,
        listClicked,

        markId,

        openSearch,
        handleOpenSearch,
        handleCloseSearch,
        handleSubmitSearch,

        submitMyLocation,
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
