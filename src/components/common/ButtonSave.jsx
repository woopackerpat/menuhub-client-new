import { LoadingButton } from "@mui/lab";

function ButtonSave({ onClick, loading }) {
  return (
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
        textTransform: 'none'
      }}
      disableElevation
      
    >
      Save
    </LoadingButton>
  );
}

export default ButtonSave;
