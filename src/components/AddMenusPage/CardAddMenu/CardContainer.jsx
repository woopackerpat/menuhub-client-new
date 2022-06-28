import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   Input,
   styled,
   TextField,
   Typography,
} from "@mui/material";
import CartUpload from "./CartUpload";
import { useState } from "react";
import DropdownCardMenu from "./DropdownCardMenu";

function CardAddMenus() {
   const [image, setImage] = useState(null);
   const Inputs = styled("input")({
      display: "none",
   });
   const ariaLabel = { "aria-label": "description" };
   return (
      <>
         <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
               }}
            >
               <DropdownCardMenu />
               <ButtonGroup
                  variant="contained"
                  color="error"
                  aria-label="outlined primary button group"
               >
                  <Button variant="text" color="secondary">
                     Restaurant's Name
                  </Button>
                  <Button sx={{ fontWeight: "bold" }}>Save</Button>
               </ButtonGroup>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
               <Box
                  sx={{
                     height: "430px",
                     borderRadius: "16px",
                     boxShadow: "1px 1px 1px  #888888",
                     p: 4,
                     backgroundColor: "#f1f1f1",
                     cursor: "pointer",
                  }}
               >
                  <label htmlFor="icon-button-file">
                     <Inputs
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => {
                           if (e.target.files) {
                              setImage(e.target.files[0]);
                           }
                        }}
                     />
                     {!image ? (
                        <CartUpload />
                     ) : (
                        <img
                           src={URL.createObjectURL(image)}
                           alt="Img"
                           loading="lazy"
                           style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                              borderRadius: "16px",
                              cursor: "zoom-in",
                              minWidth: "230px",
                           }}
                        />
                     )}
                  </label>
               </Box>
               <Box
                  sx={{
                     borderRadius: "16px",
                     p: 2,
                     cursor: "pointer",
                     mt: "auto",
                  }}
               >
                  <Box
                     sx={{
                        borderRadius: "16px",
                        p: 2,
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           gap: 5,
                        }}
                     >
                        <Box
                           component="form"
                           sx={{
                              "& > :not(style)": { m: 1 },
                           }}
                           noValidate
                           autoComplete="off"
                        >
                           <Input
                              placeholder="Add your menu"
                              inputProps={ariaLabel}
                           />
                        </Box>

                        <Box
                           sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                           }}
                        >
                           <Avatar />
                           <Typography>Restaurant's Name</Typography>
                        </Box>
                        <Box
                           sx={{
                              width: "100%",
                           }}
                        >
                           <TextField
                              fullWidth
                              label="description"
                              id="fullWidth"
                              multiline={true}
                              rows={9}
                           />
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   );
}

export default CardAddMenus;
