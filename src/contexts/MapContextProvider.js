import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getRestaurantApi } from "../api/map";

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
  });

  const navigate = useNavigate();

  const [childClicked, setChildClicked] = useState(null);

  const [bounds, setBounds] = useState(null);

  // เมื่อ bound เปลี่ยนจะยิง axios ไปหาร้านอาหาร
  useEffect(() => {
    const run = async () => {
      const res = await getRestaurantApi();
      const restaurants = res.data;
      console.log(restaurants);
    };
    try {
      run();
    } catch (err) {
      console.log(err);
    }
  }, [bounds]);

  const [places, setPlaces] = useState(initPlaces);

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
    console.log(value);
    const { lat, lng } = value;
    // ยิง axios ที่นี่ พอได้ค่าแล้วทำการ setPlaces
    setCoordinates({ lat, lng });
    setOpenSearch(false);
    navigate("/map");
  };

  const submitMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
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
