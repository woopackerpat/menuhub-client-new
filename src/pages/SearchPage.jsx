import { Backdrop, Box, CircularProgress } from "@mui/material";
import ContainerSearch from "../components/SearchPage/ContainerSearch";
import { useSearch } from "../contexts/SearchContextProvider";

function SearchPage() {
  const { isLoading } = useSearch();

  return (
    <Box
    sx={{
      pt: "20px",
      px: {
        xs: "0",
        xl: "70px",
        lg: "40px",
        md: "40px",
        sm: "10px",
      },
    }}
    >
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="error" />
      </Backdrop>
      <ContainerSearch />
    </Box>
  );
}
export default SearchPage;
