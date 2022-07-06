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

function ModalCreatePin({ open, handleClose }) {
  const [boardName, setBoardName] = useState("");

  const { createNewPin } = usePin();

  const handleClickCreate = async () => {
    try {
      await createNewPin(boardName);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
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
              label="Create New Board"
              value={boardName}
              placeholder="Board name"
              onChange={e => setBoardName(e.target.value)}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ fontWeight: "bold", textTransform: "none" }}
              onClick={handleClickCreate}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
export default ModalCreatePin;
