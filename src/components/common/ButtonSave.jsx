import { LoadingButton } from "@mui/lab";

function ButtonSave({ onClick, loading }) {
  return (
    <LoadingButton
      loading={loading}
      onClick={onClick}
      variant="contained"
      color="error"
      sx={{ textTransform: "none", fontWeight: "bold" }}
    >
      Save
    </LoadingButton>
  );
}

export default ButtonSave;
