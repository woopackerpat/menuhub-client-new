import { ImageListItem, ImageListItemBar } from "@mui/material";

function CartItems({ item }) {
   const { src, title } = item;
   return (
      <ImageListItem>
         <img
            src={src}
            alt="img"
            style={{
               objectFit: "cover",
               width: "100%",
               height: "100%",
               borderRadius: "10px",
               cursor: "zoom-in",
            }}
         />
         <ImageListItemBar position="below" title={title} />
      </ImageListItem>
   );
}

export default CartItems;
