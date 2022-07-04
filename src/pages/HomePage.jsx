import { Box } from "@mui/material";
import ContainerHome from "../components/HomePage/ContainerHome";

function HomePage() {
  return (
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
  );
}
export default HomePage;
