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
import { useMap } from "../../contexts/MapContextProvider";
import { TextField } from "@mui/material";

function PlacesAutocomplete() {

  

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [googlePlaceId, setGooglePlaceId] = useState("");
  const [address, setAddress] = useState("");

  const { handleSubmitSearch } = useMap();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitSearch({ lat, lng, googlePlaceId, address });
    setLat("");
    setLng("");
    setGooglePlaceId("");
    setAddress("");
  };

  return (
    <>
      <div className="col-9 col-lg-10  ">
        <form ref={ref} onSubmit={(e) => handleSubmit(e)}>
          <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput
              value={value}
              onChange={handleInput}
              disabled={!ready}
              placeholder="Enter preferred location"
              className="input-autocomplete"
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
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      </div>
    </>
  );
}

export default PlacesAutocomplete;
