import { Button } from "@mui/material";
import { useState } from "react";
import { useRestaurant } from "../../contexts/RestaurantContextProvider";

function ButtonSave({ onClick }) {
  return (
    <Button variant="contained" onClick={() => onClick} color="error">
      Save
    </Button>
  );
}

export default ButtonSave;
