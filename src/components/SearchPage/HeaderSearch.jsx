import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContextProvider";

function HeaderSearchPage(props) {
   const isMobile = useMediaQuery("(max-width: 420px)");
   const isSurface = useMediaQuery("(max-width: 550px)");
   const isIpad = useMediaQuery("(max-width: 900px)");
   const isDesktop = useMediaQuery("(max-width: 1300px)");
   const [list, setList] = useState([]);
   const [listRestaurant, setListRestaurant] = useState([])

   const {inputSearch} = useSearch()

   const refId = props.refId
   const location = useLocation()
   const navigate = useNavigate()

   useEffect(() => {
      const fetchSuggestions = async (refId) => {
         try {
            const res = await axios.post('/restaurant/suggestions', { refId: refId })
            setListRestaurant(res.data)
         } catch (err) {
            console.log('fetchSuggestions error')
         }
      }
      if (refId) {
         fetchSuggestions(refId)
      }
   }, [refId, location])

   useEffect(() => {
      if (listRestaurant.length != 0) {
         if (isMobile) {
            setList(listRestaurant.slice(0, 0));
         } else if (isSurface) {
            setList(listRestaurant.slice(0, 2));
         } else if (isIpad) {
            setList(listRestaurant.slice(0, 4));
         } else if (isDesktop) {
            setList(listRestaurant.slice(0, 7));
         } else {
            setList(listRestaurant.slice(0, 9));
         }
      }
   }, [listRestaurant]);

   return (
      <div>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
         >
            <Typography variant="h5" gutterBottom>
               Suggest only for you
            </Typography>
            <Box
               sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
               }}
            >
               {list ? (
                  list?.map((suggestion) => (
                     <Button
                        key={suggestion.id}
                        sx={{
                           padding: 1,
                           backgroundColor: "#767676",
                           color: "white",
                           "&:hover": {
                              color: "#000000",
                              backgroundColor: "#efefef",
                           },
                        }}
                        onClick={() => {
                           inputSearch(suggestion.name)
                           // navigate(`../search?search=${suggestion.name}`)
                        }}
                     >
                        <Typography>{suggestion.name}</Typography>
                     </Button>
                  ))
               ) : (<div></div>)}

            </Box>
         </Box>
      </div>
   );
}

export default HeaderSearchPage;
