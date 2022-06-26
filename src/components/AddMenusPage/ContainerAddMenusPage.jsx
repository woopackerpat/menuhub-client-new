import { Box, Button } from "@mui/material";
import CardContainer from "./CardAddMenu/CardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
function ContainerAddMenusPage() {
   // const [input, setInput] = useState([
   //    {
   //       id: "",
   //       title: "",
   //       img: "",
   //       name: "",
   //       profilePic: "",
   //       description: "",
   //    },
   // ]);

   // const handleAdd = () => {
   //    const newObj = [...input];
   // };

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
         }}
      >
         <Box
            sx={{
               width: "50%",
               mx: "auto",
               p: 4,
               boxShadow: "1px 1px 4px 2px #888888",
               borderRadius: "16px",
               mt: 10,
            }}
         >
            <CardContainer />
         </Box>
         <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "50px" }}
            // onClick={handleAdd}
         >
            <AddIcon fontSize="large" sx={{ fontWeight: "bold" }} />
         </Button>
      </Box>
   );
}

export default ContainerAddMenusPage;
