import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { usePin } from "../../contexts/PinContextProvider";

function ButtonSaveProfile({ onClick, loading, restaurantId, pinId }) {
  const [deleting, setDeleting] = useState(false);

  const { user } = useAuth();

  let isSaved;

  if (user === "") {
    isSaved = -1;
  }
  console.log(isSaved);

  const { pin, removeRestaurant } = usePin();

  const pins = pin?.filter(el => el.id === pinId);

  if (user !== "") {
    isSaved = pins[0]?.Restaurants.findIndex(el => el.id === +restaurantId);
  }

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
          onClick={user === "" ? () => {} : onClick}
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
          onClick={user === "" ? () => {} : handleRemoveRes}
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
