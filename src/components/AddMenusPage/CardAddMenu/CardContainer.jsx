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
import DropdownCardMenu from "./DropdownCardMenu";

function CardAddMenus({ input, idx, setInput }) {
   const Inputs = styled("input")({
      display: "none",
   });
   const ariaLabel = { "aria-label": "description" };

   const handleTitle = (e) => {
      const clone = [...input];
      clone[idx].title = e.target.value;
      console.log(idx);
      setInput(clone);
   };

   const handleDescription = (e) => {
      const clone = [...input];
      clone[idx].description = e.target.value;
      console.log(idx);
      setInput(clone);
   };

   const handleImage = (e) => {
      const clone = [...input];
      clone[idx].img = e.target.files[0];
      console.log(idx);
      setInput(clone);
   };

   return (
      <>
         <Box
            sx={{
               width: "50%",
               mx: "auto",
               p: 4,
               boxShadow: "1px 1px 4px 2px #888888",
               borderRadius: "16px",
               mt: "auto",
            }}
         >
            <Box
               sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}
            >
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
                        height: "100%",
                        maxWidth: "400px",
                        borderRadius: "16px",
                        boxShadow: "1px 1px 1px  #888888",
                        p: Number(`${input[idx].img ? 0 : 4}`),
                        backgroundColor: "#f1f1f1",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <label htmlFor={`icon-button-file${idx}`}>
                        <Inputs
                           accept="image/*"
                           id={`icon-button-file${idx}`}
                           type="file"
                           onChange={handleImage}
                        />
                        {!input[idx].img ? (
                           <CartUpload />
                        ) : (
                           <img
                              src={URL.createObjectURL(input[idx].img)}
                              alt="Img"
                              loading="lazy"
                              style={{
                                 objectFit: "cover",
                                 width: "100%",
                                 borderRadius: "16px",
                                 cursor: "zoom-in",
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
                                 value={input[idx].title}
                                 onChange={handleTitle}
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
                                 value={input[idx].description}
                                 onChange={handleDescription}
                              />
                           </Box>
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
