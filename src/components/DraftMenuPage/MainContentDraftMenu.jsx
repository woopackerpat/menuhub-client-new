import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CategoryDraftMenuPage from "./CategoryDraftMenuPage";
import ControlledCheckbox from "../common/ControlledCheckbox";

function MainContentDraftMenu() {
   return (
      <div>
         <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
            noValidate
            autoComplete="off"
         >
            <div>
               <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  //   defaultValue="Hello World"
                  placeholder="Restaurant name"
               />
            </div>
         </Box>
         <Box
            component="form"
            sx={{
               "& .MuiTextField-root": { m: 1, width: "50ch" },
               display: "flex",
               flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
         >
            <div>
               <TextField
                  id="outlined-required"
                  label=""
                  //   defaultValue="Hello World"
                  placeholder="Restaurant location"
               />
            </div>
            <CategoryDraftMenuPage />
         </Box>
         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ControlledCheckbox />
            <Typography>I am the restaurant owner</Typography>
         </Box>

         {/* ========================================= createButton =============================================== */}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               mt: 5,
               gap: 4,
            }}
         >
            <Button
               variant="contained"
               color="error"
               sx={{ fontWeight: "bold" }}
            >
               Create
            </Button>
            <Typography align="center" fontWeight="bold" variant="h6">
               Your Draft
            </Typography>
         </Box>

         <Box sx={{ display: "relative" }}>
            <IconButton
               sx={{
                  display: "absolute",
                  left: 450,
                  bottom: 315,
                  color: "#e60023",
               }}
            >
               <AddLocationAltIcon fontSize="large" />
            </IconButton>
         </Box>
      </div>
   );
}

export default MainContentDraftMenu;
