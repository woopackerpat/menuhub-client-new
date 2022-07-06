import { AppBar, Box, IconButton } from "@mui/material";
import ContainerHome from "../components/HomePage/ContainerHome";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function HomePage() {
   const handleClickToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   };

   return (
      <>
         <Box
            position="fixed"
            sx={{
               display: "grid",
               right: 12,
               bottom: 20,
               borderRadius: "50%",
               boxShadow: 5,
            }}
            zIndex={10}
            onClick={() => handleClickToTop()}
         >
            <IconButton
               sx={{
                  "&:hover": { backgroundColor: "#e60023", color: "white" },
               }}
            >
               <ArrowUpwardIcon
                  fontSize="large"
                  color="lightGray"
                  backgroundColor="white"
               />
            </IconButton>
         </Box>
         <Box
            sx={{
               pt: "20px",
               px: {
                  xs: "0",
                  xl: "70px",
                  lg: "40px",
                  md: "40px",
                  sm: "10px",
               },
            }}
         >
            <ContainerHome />
         </Box>
      </>
   );
}
export default HomePage;
