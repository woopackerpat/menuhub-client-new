import * as React from "react";
import Alert from "@mui/material/Alert";
import { Box, Collapse } from "@mui/material";

function ToastMessage({ text, openToast }) {
   return (
      <Box>
         <Collapse in={openToast}>
            <Alert variant="outlined" severity="success">
               {text}
            </Alert>
         </Collapse>
      </Box>
   );
}

export default ToastMessage;
