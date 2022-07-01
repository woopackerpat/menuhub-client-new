import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ContainerCardSaved from "./ContainerCardSaved";

function AlbumSaved() {
   const navigate = useNavigate();
   const { albumId } = useParams;
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               mt: 10,
               width: "300px",
               cursor: "pointer",
               border: "none",
               borderRadius: "16px",
               "&:hover": { filter: "grayscale(40%)" },
            }}
            onClick={() => navigate(`${albumId}`)}
         >
            {cardSaved.length > 0 && <ContainerCardSaved />}
         </Box>
         <Typography variant="h6" fontWeight="bold">
            All pins
         </Typography>
      </Box>
   );
}

export default AlbumSaved;

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
