import { LoadingButton } from "@mui/lab";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";

function ButtonSave({ onClick, loading, restaurantId }) {
  const { pin } = usePin();
  const allRes = getAllPins(pin);
  const isSaved = allRes?.findIndex(el => el.id === +restaurantId);

  const handleRemoveRes = async () => {};

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
          loading={loading}
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
