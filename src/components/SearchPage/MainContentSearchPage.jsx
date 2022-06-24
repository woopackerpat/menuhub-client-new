import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import CartItems from "../common/cartItems/CartItems";

const mobData = [
   {
      id: 1,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655832068320-908e08db2612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 2,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655844548547-fabb9c5e7159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 3,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655803230295-63df4db6cfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 4,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 5,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655743067505-89a77ef5456f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 6,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655832068320-908e08db2612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 7,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655844548547-fabb9c5e7159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 8,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655803230295-63df4db6cfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 9,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 10,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655743067505-89a77ef5456f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 11,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655832068320-908e08db2612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 12,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655844548547-fabb9c5e7159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 13,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655803230295-63df4db6cfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 14,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 15,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655743067505-89a77ef5456f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 16,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655832068320-908e08db2612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 17,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655844548547-fabb9c5e7159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 18,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655803230295-63df4db6cfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 19,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
   {
      id: 20,
      title: "aaaaaa",
      src: "https://images.unsplash.com/photo-1655743067505-89a77ef5456f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
   },
];

function MainContentSearchPage() {
   return (
      <Box>
         <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
         >
            {mobData.map((item) => (
               <CartItems key={item.id} item={item} />
            ))}
         </Masonry>
      </Box>
   );
}
export default MainContentSearchPage;
