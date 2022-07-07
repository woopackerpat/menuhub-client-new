import { Box, Button, Typography } from "@mui/material";
import React from "react";

function RegisterButton() {
   return (
      <Box sx={{ my: "10px" }}>
         <Button
            variant="contained"
            fullWidth
            size="small"
            color="error"
            type="submit"
         >
            <Typography
               sx={{
                  py: "6px",
                  fontWeight: "bold",
                  textTransform: "none",
               }}
               variant="h6"
            >
               Register
            </Typography>
         </Button>
      </Box>
   );
}

export default RegisterButton;
