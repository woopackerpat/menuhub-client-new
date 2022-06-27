import { useMap } from "../../contexts/MapContextProvider";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function LocationSearch() {
  const { openSearch, handleCloseSearch, handleSubmitSearch } = useMap();

  return (
    <div>
      <Dialog
        onClose={handleCloseSearch}
        aria-labelledby="customized-dialog-title"
        open={openSearch}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseSearch}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MapIcon color = "error"/>
            <Typography variant="h5" sx={{ ml: "10px" }}>
              Search restaurants by location
            </Typography>
          </Box>
        </BootstrapDialogTitle>
        <DialogContent>
          <Grid container sx={{ width: "500px", mt: "15px", mb: "20px" }}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                label="Enter preferred location"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmitSearch(e.target.value);
                  }
                }}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a>
                <LocationOnIcon color="error" style={{ fontSize: "40px" }} />
              </a>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LocationSearch;
