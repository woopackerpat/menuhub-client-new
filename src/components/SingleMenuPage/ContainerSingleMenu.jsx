import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuCardContainer from "./CardSingleMenu/MenuCardContainer";

function ContainerSingleMenu() {
   const { menuId } = useParams();
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
