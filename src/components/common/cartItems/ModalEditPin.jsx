import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "16px",
  p: 4,
};

function ModalEditPin({ open, handleClose, pinId, name }) {
  const [newName, setNewName] = useState(name);

  const { updatePin } = usePin();

  const handleClickCreate = async e => {
    try {
      e.stopPropagation();
      await updatePin(newName, pinId);
      handleClose(e);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box onClick={e => e.stopPropagation()}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label="Edit Board Name"
              value={newName}
              placeholder={name}
              onChange={e => setNewName(e.target.value)}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ fontWeight: "bold", textTransform: "none" }}
              onClick={handleClickCreate}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
export default ModalEditPin;
