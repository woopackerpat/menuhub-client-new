import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import HorizontalCard from "../components/GoogleMap/HorizontalCard";
import Suggestion from "../components/GoogleMap/Suggestion";
import RoomIcon from "@mui/icons-material/Room";
import { useMap } from "../contexts/MapContextProvider";
import { useState, useEffect, createRef } from "react";


function MapPage() {
  const { places, childClicked, markId } = useMap();

  const [elRefs, setElRefs] = useState([]);

  console.log(places)

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);


  return (
    <Container fluid maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
          mt: "15px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Suggest only for you
        </Typography>
        <Suggestion />
      </Box>
      <Box sx={{ mb: "10px", pl: "10px", display: "flex" }}>
        <RoomIcon color="error" fontSize="large" />
        <Typography variant="h6" component="body1" sx={{ ml: "10px" }}>
          Restaurants near Mint Tower
        </Typography>
      </Box>
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
            xs={12}
            lg = {6}
            // sx={{
            //   display: { xs: "none", lg: "block" },
             
            // }}

           
          >
            <GoogleMap />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ height: "80vh", overflow: "scroll" }}>
            {places?.map((place, i) => (
              <Paper
                key={i}
                sx={{ mx: "20px", my: "15px", p: "5px", borderRadius: "24px" }}
                elevation="3"
                ref={elRefs[i]}
              >
                <HorizontalCard
                  selected={childClicked !== null && Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                  markId = {markId[i]}
                 
                />
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default MapPage;
