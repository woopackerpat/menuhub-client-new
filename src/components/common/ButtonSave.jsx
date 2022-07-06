import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";

function ButtonSave({ onClick, loading, restaurantId, pinId }) {
  const [deleting, setDeleting] = useState(false);

  const { albumId } = useParams();

  const { pin, removeRestaurant, fetchPinById } = usePin();
  console.log(pin?.slice(1, pin.length));
  const allRes = getAllPins(pin?.slice(1, pin.length));
  console.log(allRes);
  const isSaved = allRes.findIndex(el => el.Pin_Restaurant.PinId === pinId);

  console.log(restaurantId, pinId);

  const handleRemoveRes = async () => {
    try {
      setDeleting(true);
      await removeRestaurant(restaurantId, pinId);
      fetchPinById(albumId);
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

export default ButtonSave;
