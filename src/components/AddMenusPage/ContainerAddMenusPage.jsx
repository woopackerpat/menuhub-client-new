import { Box, Button } from "@mui/material";
import CardContainer from "./CardAddMenu/CardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
function ContainerAddMenusPage() {
   const [input, setInput] = useState([
      {
         id: "",
         title: "",
         img: "",
         description: "",
      },
   ]);

   const handleAdd = () => {
      const newObj = [
         ...input,
         {
            id: "",
            title: "",
            img: "",
            description: "",
         },
      ];
      setInput(newObj);
   };

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
         }}
      >
         {input.map((el, idx) => (
            <CardContainer
               key={idx}
               input={input}
               idx={idx}
               setInput={setInput}
            />
         ))}

         <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "50px" }}
            onClick={handleAdd}
         >
            <AddIcon fontSize="large" sx={{ fontWeight: "bold" }} />
         </Button>
      </Box>
   );
}

export default ContainerAddMenusPage;
