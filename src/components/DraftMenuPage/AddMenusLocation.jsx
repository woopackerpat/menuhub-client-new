import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import useOnclickOutside from "react-cool-onclickoutside";
import "@reach/combobox/styles.css";
import { useEffect, useState, useContext } from "react";
import { useMenus } from "../../contexts/MenusContextProvider";
import { Box, TextField } from "@mui/material";

function AddMenusLocation({ handleSubmitLocation, location }) {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [googlePlaceId, setGooglePlaceId] = useState("");
  const [address, setAddress] = useState("");

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    handleSubmitLocation({
      latitude: lat,
      longitude: lng,
      googleId: googlePlaceId,
      address,
    });
  }, [lat, lng, googlePlaceId, address]);

  useEffect(() => {
    setLat("");
    setLng("");
    setGooglePlaceId("");
    setAddress("");
  }, [location]);

  const ref = useOnclickOutside(() => {});

  const handleSelect = (val) => {
    // หา googleId จาก dropdown ที่ถูกเลือก
    const matchObj = data.find((obj) => val === obj.description);

    setGooglePlaceId(matchObj.place_id);

    setValue(val, false);
    const parameter = {
      // config สำหรับ get detail
      placeId: matchObj.place_id,
      fields: [
        "name",
        "address_components",
        "formatted_address",
        "adr_address",
      ],
    };

    getDetails(parameter)
      .then((details) => {
        const { formatted_address, name } = details;
        setAddress(formatted_address);
      })
      .catch((error) => {
        console.log(error);
      });

    getGeocode({ address: val }).then((result) => {
      try {
        const { lat, lng } = getLatLng(result[0]);
        setLat(lat);
        setLng(lng);
      } catch (error) {
        console.log(error);
      }
    });

    clearSuggestions();
  };

  //   กด submit ไม่ได้
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleSubmitLocation({
  //     latitude: lat,
  //     longitude: lng,
  //     googleId: googlePlaceId,
  //     address,
  //   });
  // };

  return (
    <Box sx={{ mx: "10px", my: "10px" }}>
      <div ref={ref}>
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Enter restaurant's location"
            className="input-autocomplete"
            style={{
              lineHeight: "50px",
              borderRadius: "16px",
              paddingLeft: "10px",
              borderColor: "#c9c9c9",
            }}
          />

          <ComboboxPopover className="front-box">
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </Box>
  );
}

export default AddMenusLocation;
