import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Spinner() {
   return (
      <Box sx={{ display: "flex" }}>
         <CircularProgress color="error" />
      </Box>
   );
}

export default Spinner;
