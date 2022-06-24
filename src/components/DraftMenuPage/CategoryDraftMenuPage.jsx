import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { Checkbox, ListItemText } from "@mui/material";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: "50ch",
      },
   },
};

const categories = [
   "Thai",
   "Isan",
   "Japanese",
   "Chinese",
   "European",
   "Italian",
   "Asian",
   "Indian",
   "French",
   "Mexican",
   "Bakery",
   "Breakfast",
   "Noodle",
   "Cafe",
   "Buffet",
   "Moo GaTa",
   "Korean",
   "Other",
];

function CategoryDraftMenuPage() {
   const [typeName, setTypeName] = useState([]);
   return (
      <>
         <FormControl sx={{ m: 1, width: "50ch" }}>
            <InputLabel id="category-types">Category</InputLabel>
            <Select
               labelId="category-types"
               id="category-types-checkbox"
               multiple
               value={typeName}
               onChange={(e) => setTypeName(e.target.value)}
               input={<OutlinedInput label="category" />}
               renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                     {selected.map((value) => (
                        <Chip key={value} label={value} />
                     ))}
                  </Box>
               )}
               MenuProps={MenuProps}
            >
               {categories.map((item) => (
                  <MenuItem key={item} value={item}>
                     <Checkbox checked={typeName.indexOf(item) > -1} />
                     <ListItemText primary={item} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </>
   );
}
export default CategoryDraftMenuPage;
