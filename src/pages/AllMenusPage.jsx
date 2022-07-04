import { Box, CssBaseline } from "@mui/material";
import BodyAllMenusPage from "../components/AllMenusPage/BodyAllMenusPage";

function AllMenuPage() {
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
      <CssBaseline>
        <BodyAllMenusPage />
      </CssBaseline>
    </Box>
  );
}
export default AllMenuPage;
