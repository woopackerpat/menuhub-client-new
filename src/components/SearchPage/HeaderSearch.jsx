import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HeaderSearchPage(props) {
   const isMobile = useMediaQuery("(max-width: 420px)");
   const isSurface = useMediaQuery("(max-width: 550px)");
   const isIpad = useMediaQuery("(max-width: 900px)");
   const isDesktop = useMediaQuery("(max-width: 1300px)");
   const [list, setList] = useState([]);
   const [listRestaurant, setListRestaurant] = useState([])
   const [loading, setLoading] = useState(0)
   const refId = props.refId
   const location = useLocation()

   useEffect(() => {
      const fetchSuggestions = async (refId) => {
         try {
            const res = await axios.post('/restaurant/suggestions', { refId: refId })
            setListRestaurant(res.data)
            setLoading(1)
         } catch (err) {
            console.log('fetchSuggestions error')
         }
      }
      if (refId) {
         fetchSuggestions(refId)
      }
   }, [refId, location])

   useEffect(() => {
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
   }, [loading, location]);

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
                     <Link to={`/search?search=${suggestion.name}`}>
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
                        >
                           <Typography>{suggestion.name}</Typography>
                        </Button>
                     </Link>
                  ))
               ) : (<div></div>)}

            </Box>
         </Box>
      </div>
   );
}

export default HeaderSearchPage;
