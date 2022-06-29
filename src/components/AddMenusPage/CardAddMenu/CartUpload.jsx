import { Box, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

function CartUpload() {
   return (
      <Box
         sx={{
            border: "2px dashed gray",
           
            borderRadius: "16px",
            p: 2,
         }}
        
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               gap: 12,
               cursor: "pointer",
            }}
         >
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "40%",
               }}
               
            >
               <UploadIcon sx={{ fontSize: "70px" }} color="secondary" />

               <Typography color="secondary">
                  Drag and drop or click to
               </Typography>
               <Typography color="secondary">upload</Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <Typography color="secondary">
                  Use high-quality .jpg files less
               </Typography>
               <Typography color="secondary">than 20MB</Typography>
            </Box>
         </Box>
      </Box>
   );
}

export default CartUpload;
