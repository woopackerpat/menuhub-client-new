import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";

function ButtonSaveProfile({ onClick, loading, restaurantId, pinId }) {
  const [deleting, setDeleting] = useState(false);

  const { pin, removeRestaurant } = usePin();

  const allRes = getAllPins(pin);

  const isSaved = allRes?.findIndex(
    el => el.id === +restaurantId && el.Pin_Restaurant.PinId === pinId
  );

  const handleRemoveRes = async () => {
    try {
      setDeleting(true);
      await removeRestaurant(restaurantId, pinId);
    } catch (err) {
      console.log(err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      {isSaved === -1 ? (
        <LoadingButton
          loading={loading}
          onClick={onClick}
          variant="contained"
          color="error"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Save
        </LoadingButton>
      ) : (
        <LoadingButton
          loading={deleting}
          onClick={handleRemoveRes}
          variant="contained"
          color="primary"
          sx={{ textTransform: "none", fontWeight: "bold", color: "#fff" }}
        >
          Saved
        </LoadingButton>
      )}
    </>
  );
}

export default ButtonSaveProfile;
