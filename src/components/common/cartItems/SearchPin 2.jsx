import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";
const { styled, InputBase } = require("@mui/material");

const Search = styled("div")(({ theme }) => ({
   display: "flex",
   flex: 1,
   position: "relative",
   borderRadius: "50px",
   backgroundColor: "#efefef",
   "&:hover": {
      backgroundColor: "#e1e1e1",
   },

   marginRight: theme.spacing(2),
   marginLeft: 0,

   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   position: "absolute",
   padding: theme.spacing(0, 2),
   height: "100%",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
}));

function SearchPin({ searchPin, setSearchPin, createdPin }) {
   const [input, setInput] = useState("");

   const handleInput = (e) => {
      e.stopPropagation();
      setInput(e.target.value);

      if (e.target.value) {
         const filterPin = searchPin?.filter((el) => {
            // console.log(el.name.toLowerCase().includes(input));
            return el.name.toLowerCase().includes(e.target.value.toLowerCase());
         });
         setSearchPin(filterPin);
      }
      if (e.target.value === "") setSearchPin(createdPin);
   };

   return (
      <form style={{ width: "100%" }}>
         <Search>
            <SearchIconWrapper>
               <SearchIcon style={{ color: "#727272", fontSize: "30px" }} />
            </SearchIconWrapper>
            <StyledInputBase
               placeholder="Search ..."
               inputProps={{ "aria-label": "search" }}
               sx={{ display: "flex", flex: 1, height: "50px" }}
               value={input}
               onChange={(e) => handleInput(e)}
            />
         </Search>
      </form>
   );
}

export default SearchPin;
