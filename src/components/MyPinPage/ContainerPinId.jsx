import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import CartItems from "../common/cartItems/CartItems";

function ContainerPinId() {
   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
         }}
      >
         <Typography variant="h5" fontWeight="bold">
            All Pins
         </Typography>
         <Box>
            <Masonry
               columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
               spacing={2}
            >
               {data.map((post) => (
                  <CartItems key={post.id} post={post} />
               ))}
            </Masonry>
         </Box>
      </Box>
   );
}

export default ContainerPinId;

const data = [
   {
      //   author: "test",
      download_url:
         "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      //   author: "test",
      download_url:
         "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
];
