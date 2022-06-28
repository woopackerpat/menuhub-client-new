import {
   Avatar,
   Box,
   ImageList,
   ImageListItem,
   Typography,
} from "@mui/material";
import ItemCardSaved from "./ItemCardSaved";

function ContainerCardSaved() {
   return (
      <ImageList sx={{ display: "flex", width: "100%" }}>
         {cardSaved.slice(0, 4).map((el, idx) => (
            <ImageListItem sx={{ marginInlineEnd: "-110px" }}>
               <ItemCardSaved key={idx} src={el.src} size="150px" />
            </ImageListItem>
         ))}
      </ImageList>
   );
}

export default ContainerCardSaved;

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
