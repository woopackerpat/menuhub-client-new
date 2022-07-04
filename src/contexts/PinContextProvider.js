import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const PinContext = createContext();

function PinContextProvider({ children }) {
  const [pin, setPin] = useState([]);
  const [pinById, setPinById] = useState([]);
  const [createdPin, setCreatedPin] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPin = async () => {
    try {
      const res = await axios.get("/pin");
      setPin(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPin();
  }, []);

  const fetchPinById = async pinId => {
    try {
      setLoading(true);
      const res = await axios.get(`/pin/single?pinid=${pinId}`);
      setPinById(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyCreated = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/restaurant/mycreated");
      setCreatedPin(res.data.myCreatedRestaurants);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createNewPin = async (name, restaurantId) => {
    try {
      setLoading(true);
      await axios.post("/pin", { name, restaurantId });
      fetchPin();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const savePinRes = async input => {
    try {
      setLoading(true);
      const res = await axios.patch("/pin/restaurant", input);
      console.log(res.data);
      fetchPin();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deletePin = async pinId => {
    try {
      setLoading(true);
      await axios.delete("/pin", { pinId });
      fetchPin();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const RemoveRestaurant = async (restaurantId, pinId) => {
    try {
      setLoading(true);
      await axios.delete("/pin/restaurant", { restaurantId, pinId });
      fetchPin();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PinContext.Provider
      value={{
        createNewPin,
        pin,
        pinById,
        createdPin,
        loading,
        deletePin,
        savePinRes,
        RemoveRestaurant,
        fetchPinById,
        fetchMyCreated,
      }}
    >
      {children}
    </PinContext.Provider>
  );
}

const usePin = () => {
  const ctx = useContext(PinContext);
  return ctx;
};

export default PinContextProvider;

export { usePin };
