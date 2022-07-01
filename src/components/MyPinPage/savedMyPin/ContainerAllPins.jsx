import { Box, ImageList, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemCardSaved from "./ItemCardSaved";

function ContainerAllPins() {
   const navigate = useNavigate();
   return (
      <Box onClick={() => navigate("/myPin/allPins")}>
         <ImageList sx={{ display: "flex" }}>
            {cardSaved.slice(0, 4).map((el) => (
               <Box sx={{ marginInlineEnd: "-110px" }}>
                  <ItemCardSaved key={el.id} src={el.src} size="150px" />
               </Box>
            ))}
         </ImageList>
         <Typography variant="h6" fontWeight="bold">
            All pins
         </Typography>
      </Box>
   );
}

export default ContainerAllPins;

const cardSaved = [
   {
      id: "1",
      title: "ejwnev",
      src: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: "2",
      title: "asdsavav",
      src: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: "3",
      title: "afnlkm",
      src: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: "4",
      title: "vqfsa",
      src: "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: "5",
      title: "zxca",
      src: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: "6",
      title: "asdsdf",
      src: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
];
