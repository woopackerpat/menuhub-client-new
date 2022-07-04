import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSearch } from "../../contexts/SearchContextProvider";
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function SearchBar() {
  const { inputSearch, search } = useSearch();
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      inputSearch(input);
      setInput("");
    } catch {
      console.log("handleSubmit error");
    }
  };

  useEffect(() => {}, [search]);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      style={{ width: "100%" }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ color: "#727272", fontSize: "30px",  }}  />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search ..."
          inputProps={{ "aria-label": "search" }}
          sx={{ display: "flex", flex: 1, height: "50px" }}
          value={input}
          onChange={handleInput}
        />
      </Search>
    </form>
  );
}

export default SearchBar;
