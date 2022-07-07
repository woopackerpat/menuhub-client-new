import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 550,
   bgcolor: "background.paper",
   boxShadow: 24,
   borderRadius: "16px",
   p: 4,
};

function ModalDeletePin({ open, handleClose, pinId }) {
   const { deletePin } = usePin();

   const handleClickDelete = async (e) => {
      try {
         e.stopPropagation();
         await deletePin(pinId);
         handleClose();
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Box onClick={(e) => e.stopPropagation()}>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <Box
                     sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                     <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ display: "flex", justifyContent: "center" }}
                     >
                        Are you sure?
                     </Typography>
                     <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
                        This board will be permanently deleted.
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 4,
                        alignItems: "center",
                     }}
                  >
                     <Button
                        variant="contained"
                        color="dark"
                        fullWidth
                        sx={{
                           fontWeight: "bold",
                           textTransform: "none",
                           color: "white",
                        }}
                        onClick={(e) => handleClose(e)}
                     >
                        Cancel
                     </Button>
                     <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        sx={{ fontWeight: "bold", textTransform: "none" }}
                        onClick={handleClickDelete}
                     >
                        Delete
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Modal>
      </Box>
   );
}
export default ModalDeletePin;
