import { Box } from "@mui/material";

const listDraft = [
   {
      id: 1,
      img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   },
   {
      id: 2,
      img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: 3,
      img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   },
   {
      id: 4,
      img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: 5,
      img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   },
   {
      id: 6,
      img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
];

function FooterDraft() {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
         }}
      >
         {listDraft.map((item) => {
            return (
               <Box
                  sx={{
                     width: "20%",
                     filter: "grayscale(50%)",
                     "&:hover": { filter: "grayscale(0%)" },
                  }}
               >
                  <img
                     key={item.id}
                     src={item.img}
                     alt="img"
                     loading="lazy"
                     style={{
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "16px",
                        cursor: "zoom-in",
                     }}
                  />
               </Box>
            );
         })}
      </Box>
   );
}
export default FooterDraft;
