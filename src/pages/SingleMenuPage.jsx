import { Box } from "@mui/material";
import ContainerSingleMenu from "../components/SingleMenuPage/ContainerSingleMenu";

function SingleMenuPage() {
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
      <ContainerSingleMenu />
    </Box>
  );
}
export default SingleMenuPage;
