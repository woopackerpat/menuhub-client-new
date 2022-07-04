import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import HorizontalCard from "../components/GoogleMap/HorizontalCard";
import Suggestion from "../components/GoogleMap/Suggestion";
import RoomIcon from "@mui/icons-material/Room";
import { useMap } from "../contexts/MapContextProvider";
import { useState, useEffect, createRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearch } from "../contexts/SearchContextProvider";
import HeaderSearchPage from "../components/SearchPage/HeaderSearch";

function MapPage() {

  const { places, childClicked, markId, isLoading, placeName  } = useMap();
  const { refId, parseMap } = useSearch()


  const [elRefs, setElRefs] = useState([]);

  const handleSuggestionData = async () => {
    parseMap(places)
  }

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
    handleSuggestionData()
  }, [places]);

  return (
    <Container
      fluid
      maxWidth="xl"
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
          mt: "15px",
        }}
      >
        {/* <Typography variant="h5" sx={{ fontWeight: 600, pl: "20px" }}>
          Suggest only for you
        </Typography>  */}
        <HeaderSearchPage refId={`${refId}`} />
        {/* <Suggestion /> */}
      </Box>
      <Box sx={{ mb: "10px", pl: "10px", display: "flex" }}>
        <RoomIcon color="error" fontSize="large" />
        <Typography variant="h6" sx={{ ml: "10px" }}>
          {`Restaurants near ${placeName}`}
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
            lg={6}
          // sx={{
          //   display: { xs: "none", lg: "block" },

          // }}
          >
            <GoogleMap />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ height: "75vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Paper
                key={place.id}
                sx={{ mx: "20px", my: "15px", p: "5px", borderRadius: "24px" }}
                elevation={1}
                ref={elRefs[i]}
              >
                <HorizontalCard
                  selected={childClicked !== null && Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                  markId={markId[i]}
                />
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Paper>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </Container>
  );
}
export default MapPage;
