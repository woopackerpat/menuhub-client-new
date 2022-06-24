import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const listRestaurant = [
   {
      id: 1,
      title: "McDonald",
   },
   {
      id: 2,
      title: "MK Suki",
   },
   {
      id: 3,
      title: "Pizza Company",
   },
   {
      id: 4,
      title: "KFC",
   },
   {
      id: 5,
      title: "Rak Thai",
   },
   {
      id: 6,
      title: "Teenoi Suki",
   },
   {
      id: 7,
      title: "LekYai Noodle",
   },
   {
      id: 8,
      title: "KFC",
   },
   {
      id: 9,
      title: "Rak Thai",
   },
   {
      id: 10,
      title: "Teenoi Suki",
   },
   {
      id: 11,
      title: "LekYai Noodle",
   },
];

function HeaderSearchPage() {
   const isMobile = useMediaQuery("(max-width: 420px)");
   const isSurface = useMediaQuery("(max-width: 550px)");
   const isIpad = useMediaQuery("(max-width: 900px)");
   const isDesktop = useMediaQuery("(max-width: 1300px)");
   const [list, setList] = useState(listRestaurant);

   useEffect(() => {
      if (isMobile) {
         setList(listRestaurant.slice(0, 0));
      } else if (isSurface) {
         setList(listRestaurant.slice(0, 2));
      } else if (isIpad) {
         setList(listRestaurant.slice(0, 4));
      } else if (isDesktop) {
         setList(listRestaurant.slice(0, 9));
      } else {
         setList(listRestaurant.slice(0, 12));
      }
   }, [isMobile]);
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
               {list.map((item) => (
                  <Button
                     key={item.id}
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
                     <Typography>{item.title}</Typography>
                  </Button>
               ))}
            </Box>
         </Box>
      </div>
   );
}

export default HeaderSearchPage;
