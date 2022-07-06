import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCardContainer from "./CardSingleMenu/MenuCardContainer";

function ContainerSingleMenu() {
   const { menuId } = useParams();

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, [menuId]);

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
         }}
      >
         <MenuCardContainer menuId={menuId} />
      </Box>
   );
}

export default ContainerSingleMenu;
