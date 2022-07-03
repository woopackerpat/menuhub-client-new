import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
   Button,
   FormControl,
   FormControlLabel,
   FormLabel,
   IconButton,
   Radio,
   RadioGroup,
   Typography,
} from "@mui/material";
import { useState } from "react";

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

function ModalReportPin({ open, handleClose }) {
   return (
      <Box>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography variant="h6" fontWeight="bold" align="center">
                  Report Pin
               </Typography>
               <FormControl>
                  <RadioGroup
                     aria-labelledby="demo-controlled-radio-buttons-group"
                     name="controlled-radio-buttons-group"
                     // value={value}
                     // onChange={handleChange}
                  >
                     <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="spam"
                     />
                     <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="Nudity or pornography"
                     />
                     <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="Self-harm"
                     />
                     <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label="Misinformation"
                     />
                     <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="Hateful activities"
                     />
                     <FormControlLabel
                        value="6"
                        control={<Radio />}
                        label="Dangerous goods"
                     />

                     <FormControlLabel
                        value="7"
                        control={<Radio />}
                        label="Harassment or privacy violations"
                     />
                     <FormControlLabel
                        value="8"
                        control={<Radio />}
                        label="Graphic violence"
                     />
                     <FormControlLabel
                        value="9"
                        control={<Radio />}
                        label="My intellectual property"
                     />
                  </RadioGroup>
               </FormControl>
               <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                     variant="contained"
                     color="dark"
                     sx={{ mt: 2, color: "white" }}
                     onClick={handleClose}
                  >
                     Cancel
                  </Button>
                  <Button
                     variant="contained"
                     color="error"
                     sx={{ mt: 2, color: "white" }}
                     onClick={handleClose}
                  >
                     Report
                  </Button>
               </Box>
            </Box>
         </Modal>
      </Box>
   );
}
export default ModalReportPin;
