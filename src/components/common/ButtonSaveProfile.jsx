import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";

function ButtonSaveProfile({ onClick, loading, restaurantId, pinId }) {
  const [deleting, setDeleting] = useState(false);

  const { pin, removeRestaurant } = usePin();

  // const allRes = getAllPins(pin);
  // console.log(pin);

  const pins = pin?.filter((el) => el.id === pinId);

  // console.log(pins[0]);

  const isSaved = pins[0]?.Restaurants.findIndex(
    (el) => el.id === +restaurantId
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
          sx={{
            color: "white",
            fontWeight: "bold",
            lineHeight: "35px",
            borderRadius: "24px",
            textTransform: "none",
          }}
          disableElevation
        >
          Save
        </LoadingButton>
      ) : (
        <LoadingButton
          loading={deleting}
          onClick={handleRemoveRes}
          variant="contained"
          color="primary"
          sx={{
            color: "white",
            fontWeight: "bold",
            lineHeight: "35px",
            borderRadius: "24px",
            textTransform: "none",
          }}
          disableElevation
        >
          Saved
        </LoadingButton>
      )}
    </>
  );
}

export default ButtonSaveProfile;
