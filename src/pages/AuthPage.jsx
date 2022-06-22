import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function AuthPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Modal
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            mx: 10,
          }}
        >
          <Box
            sx={{
              mt: "60px",
            }}
          >
            <img
              width="50px"
              src="https://cdn.logojoy.com/wp-content/uploads/2018/08/15101933/2.png"
              alt=""
            />
          </Box>
          <DialogTitle variant = "h3">Welcome to Menuhub</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default AuthPage;
