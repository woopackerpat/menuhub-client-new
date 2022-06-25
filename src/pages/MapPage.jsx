import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import GoogleMap from "../components/GoogleMap/GoogleMap";

function MapPage() {
  return (
    <Container fluid maxWidth="xl" sx={{ backgroundColor: "red", px: "0" }}>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <GoogleMap />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>card</Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MapPage;
