import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import HorizontalCard from "../components/GoogleMap/HorizontalCard";

function MapPage() {
  return (
    <Container fluid maxWidth="xl">
      <Paper
        elevation={3}
        sx={{
          px: 0,
          borderRadius: "24px",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
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
          <Grid item xs={12} lg={6} sx={{ height: "80vh", overflow: "scroll" }}>
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default MapPage;
