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

import "@reach/combobox/styles.css";
import useOnclickOutside from "react-cool-onclickoutside";

function PlacesAutocomplete(props) {
  const { setPlace, placeholder } = props;
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
    const matchObj = data.find((obj) => val === obj.description);

    setValue(val, false);
    const parameter = {
      placeId: matchObj.place_id,
      fields: ["name", "address_components"],
    };

    getDetails(parameter)
      .then((details) => {
        console.log("PlaceName", details);
      })
      .catch((error) => {
        console.log(error);
      });

    getGeocode({ address: val }).then((result) => {
      try {
        const { lat, lng } = getLatLng(result[0]);
        console.log("Coordinates: ", { lat, lng });
      } catch (error) {
        console.log(error);
      }
    });

    clearSuggestions();
  };

  return (
    <form ref={ref}>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder={placeholder}
          className="form-control my-2 form-control-lg rounded fw-light fs-6 place-input place-input shadow-none"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </form>
  );
}

export default PlacesAutocomplete;
