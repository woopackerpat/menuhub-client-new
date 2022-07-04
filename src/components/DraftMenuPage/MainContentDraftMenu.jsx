import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CategoryDraftMenuPage from "./CategoryDraftMenuPage";
import ControlledCheckbox from "../common/ControlledCheckbox";
import { useEffect, useState } from "react";
import AddMenusLocation from "./AddMenusLocation";
import validator from "validator";
import { useMap } from "../../contexts/MapContextProvider";
import { createRestaurant, updateRestaurant } from "../../api/menu";
import { useNavigate } from "react-router-dom";
import { useRestaurant } from "../../contexts/RestaurantContextProvider";
import { getRestaurantDetails } from "../../api/menu";

function MainContentDraftMenu({ restaurantId }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState({});
  const [categoryArr, setCategoryArr] = useState([]);
  const [checked, setChecked] = useState(true);
  const [lineId, setLineId] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const { isEditRestaurant, setIsEditRestaurant } = useRestaurant();

  const { submitMyLocation } = useMap();

  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const res = await getRestaurantDetails(restaurantId);
      const restaurantDetails = res.data.Restaurant;

      setName(restaurantDetails.name);
      setLocation({
        address: restaurantDetails.address,
        googleId: restaurantDetails.googleId,
        latitude: restaurantDetails.latitude,
        longitude: restaurantDetails.longitude,
      });

      const catArr = restaurantDetails.Categories.map((el) => el.name);
      setCategoryArr(catArr);
      setLineId(restaurantDetails.lineId);
      setPhone(restaurantDetails.number + "");
      setWebsite(restaurantDetails.websiteUrl || "");
    };
    if (isEditRestaurant) {
      run();
    }
  }, [isEditRestaurant]);

  let error = {};

  if (!validator.isNumeric(phone) && phone !== "") {
    error.phone = "Invalid phone number";
  }

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmitLocation = (restaurant) => {
    const { latitude, longitude, googleId, address } = restaurant;
    if (latitude && longitude && googleId && address) {
      setLocation(restaurant);
    }
  };

  const handleCreateRestaurant = async () => {
    const res = await createRestaurant({
      ...location,
      name,
      isRequest: checked,
      lineId,
      number: phone,
      categoryArr,
      websiteUrl: website,
    });
    const newRes = res.data;
    const { restaurantIdForMenus, restaurantNameForMenus } = newRes;
    setName("");
    setLocation({});
    setCategoryArr([]);
    setChecked(true);
    setLineId("");
    setPhone("");
    setWebsite("");
    navigate(`/draftMenu/${restaurantIdForMenus}`);
  };

  const handleUpdateRestaurant = async () => {
    const res = await updateRestaurant(restaurantId, {
      name,
      latitude: location.latitude,
      longitude: location.longitude,
      googleId: location.googleId,
      categoryArr,
      isRequest: checked,
      lineId,
      number: phone,
      websiteUrl: website,
    });
    navigate("/myPin/created-pin");
    setName("");
    setLocation({});
    setCategoryArr([]);
    setChecked(true);
    setLineId("");
    setPhone("");
    setWebsite("");

    setIsEditRestaurant(false);
  };

  return (
    <div>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}>
        <TextField
          autoComplete= "off"
          required
          id="outlined-required"
          label="Restaurant name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Restaurant name"
          value={name}
        />
      </Box>

      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AddMenusLocation
          handleSubmitLocation={handleSubmitLocation}
          location={location}
        />

        <CategoryDraftMenuPage
          categoryArr={categoryArr}
          setCategoryArr={setCategoryArr}
        />
      </Box>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}>
        <TextField
        autoComplete= "off"
          id="outlined-required"
          label="Line Id"
          onChange={(e) => setLineId(e.target.value)}
          placeholder="Line Id"
          value={lineId}
        />
      </Box>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}>
        <TextField
        autoComplete= "off"
          error={error?.phone && true}
          id="outlined-required"
          label="Phone number"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          value={phone}
        />
      </Box>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}>
        <TextField
        autoComplete= "off"
          error={error?.website && true}
          id="outlined-required"
          label="Website"
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
          value={website}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ControlledCheckbox handleCheck={handleCheck} checked={checked} />
        <Typography>I am the restaurant owner</Typography>
      </Box>

      {/* ========================================= createButton =============================================== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 5,
          gap: 4,
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ fontWeight: "bold", lineHeight: "40px", fontSize: "18px" }}
          onClick={
            isEditRestaurant
              ? () => handleUpdateRestaurant()
              : () => handleCreateRestaurant()
          }
        >
          {isEditRestaurant ? "Save" : "Create"}
        </Button>
        <Typography align="center" fontWeight="bold" variant="h6">
          Your Draft
        </Typography>
      </Box>

      <Box sx={{ display: "relative" }}>
        <IconButton
          sx={{
            display: "absolute",
            left: 450,
            bottom: 550,
            color: "#e60023",
          }}
        >
          <AddLocationAltIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
}

export default MainContentDraftMenu;
