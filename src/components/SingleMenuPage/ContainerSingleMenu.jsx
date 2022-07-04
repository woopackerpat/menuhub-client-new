import { Box } from "@mui/material";
import axios from "../../config/axios";
import { useState } from "react";
import { useEffect } from "react";
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
