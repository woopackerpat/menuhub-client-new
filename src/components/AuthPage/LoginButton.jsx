import { Box, Button, Typography } from "@mui/material";
import React from "react";

function LoginButton() {
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
               Log in
            </Typography>
         </Button>
      </Box>
   );
}

export default LoginButton;
