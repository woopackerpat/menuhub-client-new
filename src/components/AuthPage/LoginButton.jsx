import { Box, Button, Typography } from "@mui/material";
import React from "react";

function LoginButton() {
   return (
      <Box sx={{ my: "10px" }}>
         <Button
            variant="contained"
            fullWidth
            size="medium"
            color="error"
            type="submit"
         >
            <Typography
               sx={{
                  py: "8px",
                  fontWeight: "normal",
                  textTransform: "none",
               }}
               variant="h6"
            >
               Log in
            </Typography>
         </Button>
      </Box>
   );
}

export default LoginButton;
