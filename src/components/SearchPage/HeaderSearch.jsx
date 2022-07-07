import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContextProvider";

function HeaderSearchPage(props) {
   const isMobile = useMediaQuery("(max-width: 420px)");
   const isSurface = useMediaQuery("(max-width: 550px)");
   const isIpad = useMediaQuery("(max-width: 900px)");
   const isDesktop = useMediaQuery("(max-width: 1300px)");
   const [list, setList] = useState([]);
   const [listRestaurant, setListRestaurant] = useState([]);

   const { inputSearch } = useSearch();

   const refId = props.refId;
   const location = useLocation();

   useEffect(() => {
      const fetchSuggestions = async (refId) => {
         try {
            const res = await axios.post("/restaurant/suggestions", {
               refId: refId,
            });
            setListRestaurant(res.data);
         } catch (err) {
            console.log("fetchSuggestions error");
         }
      };
      if (refId) {
         fetchSuggestions(refId);
      }
   }, [refId, location]);

   useEffect(() => {
      if (listRestaurant.length != 0) {
         if (isMobile) {
            setList(listRestaurant.slice(0, 0));
         } else if (isSurface) {
            setList(listRestaurant.slice(0, 2));
         } else if (isIpad) {
            setList(listRestaurant.slice(0, 4));
         } else if (isDesktop) {
            setList(listRestaurant.slice(0, 5));
         } else {
            setList(listRestaurant.slice(0, 6));
         }
      }
   }, [listRestaurant]);

   const color = [
      "564e4e",
      "564242",
      "563131",
      "542121",
      "591212",
      // "5b0909",
      "6d6565",
      "870909",
      "994040",
      "a07272",
      "a05272",
   ];

   const setColor = (input) => {
      const selector = input.length % 10;
      return color[selector];
   };

   return (
      <>
         <Grid
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
            container
         >
            <Grid item xs={2}>
               <Typography
                  variant="h5"

                  // gutterBottom
               >
                  Suggestions:
               </Typography>
            </Grid>
            <Grid
               item
               xs={10}
               sx={{ display: "flex", justifyContent: "flex-end" }}
            >
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                  }}
               >
                  {list ? (
                     list?.map((suggestion, idx) => {
                        const english = /^[A-Za-z0-9]*$/;
                        const isEnglish = english.test(suggestion.name);
                        console.log(isEnglish);
                        return (
                           <Button
                              key={suggestion.id}
                              sx={{
                                 padding: 2,
                                 backgroundColor: `#${setColor(
                                    suggestion.name
                                 )}`,
                                 color: "white",
                                 borderRadius: "36px",
                                 textTransform: "capitalize",

                                 "&:hover": {
                                    color: "#000000",
                                    backgroundColor: "#efefef",
                                 },
                              }}
                              onClick={() => {
                                 inputSearch(suggestion.name);
                                 // navigate(`../search?search=${suggestion.name}`)
                              }}
                              className="transition-hover"
                           >
                              <Typography
                                 className="thai"
                                 sx={{ fontWeight: 300 }}
                              >
                                 {suggestion.name.length > 18
                                    ? suggestion.name.slice(0, 18) + "..."
                                    : suggestion.name}
                              </Typography>
                           </Button>
                        );
                     })
                  ) : (
                     <div></div>
                  )}
               </Box>
            </Grid>
         </Grid>
      </>
   );
}

export default HeaderSearchPage;
