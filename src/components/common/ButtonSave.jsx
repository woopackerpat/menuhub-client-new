import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";

function ButtonSave({ onClick, loading, restaurantId, pinId }) {
  const [deleting, setDeleting] = useState(false);

  const { user } = useAuth();

  const { pin, removeRestaurant, fetchPinById } = usePin();

  let isSaved;

  const allRes = getAllPins(pin?.slice(1, pin.length));

  if (user === "") {
    isSaved = -1;
  }

  if (user !== "") {
    isSaved = allRes.findIndex(
      el => el.Pin_Restaurant.PinId === pinId && +el.id === +restaurantId
    );
  }

  const handleRemoveRes = async e => {
    try {
      e.stopPropagation();
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
          onClick={user === "" ? () => {} : onClick}
          variant="contained"
          color="error"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Save
        </LoadingButton>
      ) : (
        <LoadingButton
          loading={deleting}
          onClick={user === "" ? () => {} : handleRemoveRes}
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

export default ButtonSave;
